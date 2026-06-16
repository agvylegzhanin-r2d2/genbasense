"""Build side-by-side forklift case and operator wearable demo GIFs."""
from __future__ import annotations

import os
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
ASSETS = Path(
    r"C:\Users\agvyl\.cursor\projects\c-Users-agvyl-srch\assets"
)
GIF_SRC = ASSETS / (
    "c__Users_agvyl_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "haptic_vibration-059abf59-c615-41a8-b2e8-6de03317fcb3.png"
)
DEMO_SRC = ASSETS / (
    "c__Users_agvyl_AppData_Roaming_Cursor_User_workspaceStorage_empty-window_images_"
    "genba_demo-2dede11b-1531-43c3-b731-7dbf4e9b02cd.png"
)

CANVAS_W, CANVAS_H = 360, 260
BG = (242, 242, 242)


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
    return canvas.convert("P", palette=Image.Palette.ADAPTIVE)


def save_gif(path: Path, frames: list[Image.Image], durations: list[int]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    frames[0].save(
        path,
        save_all=True,
        append_images=frames[1:],
        duration=durations,
        loop=0,
        optimize=True,
        disposal=2,
    )
    print(f"Saved {path.name}: {len(frames)} frames, {os.path.getsize(path) / 1024:.0f} KB")


def build_forklift_case() -> None:
    frames: list[Image.Image] = []
    durations: list[int] = []

    src = Image.open(GIF_SRC)
    for i in range(60, src.n_frames, 4):
        src.seek(i)
        frames.append(fit_on_canvas(src.copy(), CANVAS_W, CANVAS_H))
        durations.append(src.info.get("duration", 120))

    demo = fit_on_canvas(Image.open(DEMO_SRC), CANVAS_W, CANVAS_H)
    for _ in range(15):
        frames.append(demo.copy())
        durations.append(125)

    save_gif(ROOT / "imgs" / "forklift_case_demo.gif", frames, durations)


def build_operator_wearable() -> None:
    frames: list[Image.Image] = []
    durations: list[int] = []

    src = Image.open(GIF_SRC)
    for i in range(0, 60, 3):
        src.seek(i)
        frames.append(fit_on_canvas(src.copy(), CANVAS_W, CANVAS_H))
        durations.append(src.info.get("duration", 120))

    save_gif(ROOT / "imgs" / "operator_wearable_demo.gif", frames, durations)


def main() -> None:
    build_forklift_case()
    build_operator_wearable()


if __name__ == "__main__":
    main()
