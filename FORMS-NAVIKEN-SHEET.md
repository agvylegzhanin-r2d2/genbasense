# GenbaSense forms → Naviken waiting-list spreadsheet

Contact and demo requests from **www.genbasense.tech** go to the **same Google Sheet** as Naviken `signup.html` (Navi-ken Waiting List).

## Sheet columns

| Column | GenbaSense contact form |
|--------|-------------------------|
| Timestamp | Auto (JST in Apps Script) |
| Name | Full name |
| Email | Email |
| Phone | Phone |
| Country | **Company name** (mapped on submit) |
| Interest | `GenbaSense Contact` or `GenbaSense Demo` (+ site type) |
| Message | Site type + user message |

## URLs on the site

- **Contact:** `contact.html` or `contact.html?inquiry=contact`
- **Book a demo:** `contact.html?inquiry=demo` (from homepage button)

## Config

Web app URL is in `gs-form-config.js` (must match Naviken `signup.html` form action).

## Test

1. Submit a test on https://www.genbasense.tech/contact.html
2. Open your **Navi-ken Waiting List** spreadsheet
3. New row with Interest starting with `GenbaSense Contact`

## Not the same as visitor analytics

| Purpose | File | Apps Script |
|---------|------|-------------|
| Contact / demo forms | `gs-form-config.js` | Naviken waiting-list script |
| Page visit counts | `gs-analytics-config.js` | `visitors-analytics.gs` (separate deployment) |
