"""Export separate forklift and wearable demos (no combining sources)."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    r"C:\Users\agvyl\.cursor\projects\c-Users-agvyl-srch\assets"
)
HAPTIC_SRC = ASSETS / (
    "c__Users_agvyl_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "haptic_vibration-059abf59-c615-41a8-b2e8-6de03317fcb3.png"
)
FORKLIFT_SRC = ASSETS / (
    "c__Users_agvyl_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "genba_demo-2dede11b-1531-43c3-b731-7dbf4e9b02cd.png"
)

CANVAS_W, CANVAS_H = 360, 260
BG = (242, 242, 242)
STEP = 3


def fit_on_canvas(im: Image.Image, canvas_w: int, canvas_h: int, bg=BG) -> Image.Image:
    im = im.convert("RGBA")
    w, h = im.size
    scale = min(canvas_w / w, canvas_h / h)
    nw, nh = max(1, int(w * scale)), max(1, int(h * scale))
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (canvas_w, canvas_h), bg + (255,))
    x = (canvas_w - nw) // 2
    y = (canvas_h - nh) // 2
    canvas.paste(im, (x, y), im)
    return canvas


def build_forklift_case() -> None:
    out = ROOT / "imgs" / "forklift_case_demo.jpg"
    out.parent.mkdir(parents=True, exist_ok=True)
    frame = fit_on_canvas(Image.open(FORKLIFT_SRC), CANVAS_W, CANVAS_H)
    frame.convert("RGB").save(out, quality=88, optimize=True)
    print(f"Saved {out.name}: {os.path.getsize(out) / 1024:.0f} KB")


def build_operator_wearable() -> None:
    out = ROOT / "imgs" / "operator_wearable_demo.gif"
    frames: list[Image.Image] = []
    durations: list[int] = []

    src = Image.open(HAPTIC_SRC)
    for i in range(0, src.n_frames, STEP):
        src.seek(i)
        frame = fit_on_canvas(src.copy(), CANVAS_W, CANVAS_H)
        frames.append(frame.convert("P", palette=Image.Palette.ADAPTIVE))
        durations.append(src.info.get("duration", 120))

    frames[0].save(
        out,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"Saved {out.name}: {len(frames)} frames, {os.path.getsize(out) / 1024:.0f} KB")


def main() -> None:
    build_forklift_case()
    build_operator_wearable()


if __name__ == "__main__":
    main()
