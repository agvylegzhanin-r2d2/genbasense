# GenbaSense unique visitors spreadsheet

Logs page views from **www.genbasense.tech** into Google Sheets and counts **unique visitors** (one ID per browser).

---

## Can’t open Apps Script from Sheets?

You do **not** need **Extensions → Apps Script**. Use **script.google.com** instead (Method B below).

Common reasons the menu fails:

| Issue | What to try |
|--------|-------------|
| **Work/school Google (e.g. OIST)** | Apps Script may be blocked. Use a **personal Gmail** (`@gmail.com`) for the sheet and script. |
| **Mobile / tablet** | Use **desktop Chrome** (or Edge). The Sheets app often has no Apps Script. |
| **Menu missing** | Top menu: **Extensions** → **Apps Script** (between Tools and Help). In Japanese: **拡張機能** → **Apps Script**. |
| **Nothing happens / blank tab** | Disable ad blockers, try Incognito, or open [script.google.com](https://script.google.com) directly. |
| **“You don’t have permission”** | Create the spreadsheet while logged into the **same** Google account you use for Apps Script. |

---

## Method B — Recommended (script.google.com)

### 1. Create the spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com) with a **personal Gmail** if your work account blocks scripting.
2. **Blank spreadsheet**.
3. Copy the **spreadsheet ID** from the URL:

   `https://docs.google.com/spreadsheets/d/`**`abc123xyz...`**`/edit`

### 2. Create the script (no Extensions menu)

1. Open **[script.google.com](https://script.google.com)** in a new tab (same Google account).
2. **New project**.
3. Delete the default code. Paste all of **`google-apps-script/visitors-analytics.gs`** from this repo.
4. At the **top of the file**, replace:

   ```javascript
   var SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';
   ```

   with your real ID, for example:

   ```javascript
   var SPREADSHEET_ID = '1abcDEFghiJKLmnopQRstuvWXyz';
   ```

5. **Save** (disk icon). Name the project e.g. `GenbaSense Visitors`.

### 3. Authorize and create tabs

1. In the toolbar, function dropdown → choose **`setupSpreadsheet`**.
2. Click **Run** ▶.
3. First time: **Review permissions** → choose your account → **Advanced** → **Go to GenbaSense Visitors (unsafe)** → **Allow**.
4. Open your spreadsheet — you should see **Visits**, **Unique visitors**, **Daily summary**.

### 4. Deploy web app

1. **Deploy** → **New deployment** → gear icon → **Web app**.
2. **Execute as:** Me  
3. **Who has access:** Anyone  
4. **Deploy** → copy the **Web app URL** (`https://script.google.com/macros/s/.../exec`).

### 5. Connect the website

In `gs-analytics.js`:

```javascript
window.GS_ANALYTICS_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT/exec';
```

Commit and push to deploy the site.

### 6. Test

Open the site in a private window, refresh once, check the **Visits** tab in the sheet.

---

## Method A — From inside Sheets (if it works for you)

1. Open your spreadsheet.
2. **Extensions** → **Apps Script**.
3. Paste `visitors-analytics.gs`, set `SPREADSHEET_ID`, run **`setupSpreadsheet`**, deploy as web app.

If **Extensions → Apps Script** is grayed out or errors, use **Method B**.

---

## Spreadsheet tabs

| Tab | Contents |
|-----|----------|
| **Visits** | Every page load |
| **Unique visitors** | One row per visitor ID |
| **Daily summary** | Page views and uniques per day |

---

## If Apps Script is completely blocked

Use **Google Analytics 4** (free) on the site instead:

1. [analytics.google.com](https://analytics.google.com) → create property for `genbasense.tech`.
2. Add the GA4 tag to `index.html` / `contact.html`.
3. Reports → **Users** / **Active users** for unique visitors.
4. Optional: **Reports** → connect to **Looker Studio** or export to Sheets.

Say if you want GA4 snippets added to the site instead.

---

## Export to Excel

In the spreadsheet: **File** → **Download** → **Microsoft Excel (.xlsx)**.

---

## Privacy

Visitor IDs are random strings in the browser; no names or emails. Mention analytics in your privacy policy if needed.
