/**
 * GenbaSense unique visitors → Google Sheets
 *
 * Easiest setup: open https://script.google.com (no Extensions menu needed).
 * Set SPREADSHEET_ID below, run setupSpreadsheet() once, Deploy → Web app (Anyone).
 */

/** Paste ID from sheet URL: https://docs.google.com/spreadsheets/d/THIS_PART/edit */
var SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';

var SHEET_VISITS = 'Visits';
var SHEET_UNIQUE = 'Unique visitors';
var SHEET_DAILY = 'Daily summary';

function getSpreadsheet_() {
  if (!SPREADSHEET_ID || SPREADSHEET_ID === 'PASTE_YOUR_SPREADSHEET_ID_HERE') {
    throw new Error(
      'Line 9: replace PASTE_YOUR_SPREADSHEET_ID_HERE with your real Sheet ID ' +
        '(from the URL between /d/ and /edit), then Save and Run again. ' +
        'Edit on script.google.com — saving only in Cursor does not update Google.'
    );
  }
  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function doGet(e) {
  try {
    logVisit_(e && e.parameter ? e.parameter : {});
  } catch (err) {
    Logger.log(err);
  }
  var pixel = Utilities.base64Decode('R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
  return ContentService.createTextOutput(pixel).setMimeType(ContentService.MimeType.GIF);
}

function logVisit_(params) {
  var ss = getSpreadsheet_();
  var visits = getOrCreateSheet_(ss, SHEET_VISITS, [
    'Timestamp (JST)',
    'Visitor ID',
    'Page',
    'Referrer',
    'Language',
    'Site',
    'New visitor',
  ]);
  var unique = getOrCreateSheet_(ss, SHEET_UNIQUE, [
    'Visitor ID',
    'First seen (JST)',
    'Last seen (JST)',
    'Visit count',
    'Last page',
    'First referrer',
  ]);

  var visitorId = String(params.visitor || params.v || 'unknown').slice(0, 64);
  var page = String(params.page || '/').slice(0, 200);
  var referrer = String(params.ref || params.referrer || '').slice(0, 500);
  var lang = String(params.lang || '').slice(0, 16);
  var site = String(params.site || 'GenbaSense').slice(0, 50);

  var now = new Date();
  var jst = Utilities.formatDate(now, 'Asia/Tokyo', 'yyyy-MM-dd HH:mm:ss');

  var isNew = !visitorExists_(unique, visitorId);
  visits.appendRow([jst, visitorId, page, referrer, lang, site, isNew ? 'Yes' : 'No']);

  if (isNew) {
    unique.appendRow([visitorId, jst, jst, 1, page, referrer]);
  } else {
    updateUniqueRow_(unique, visitorId, jst, page);
  }

  refreshDailySummary_(ss);
}

function visitorExists_(sheet, visitorId) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return false;
  var ids = sheet.getRange(2, 1, lastRow, 1).getValues();
  for (var i = 0; i < ids.length; i++) {
    if (ids[i][0] === visitorId) return true;
  }
  return false;
}

function updateUniqueRow_(sheet, visitorId, jst, page) {
  var lastRow = sheet.getLastRow();
  if (lastRow < 2) return;
  var data = sheet.getRange(2, 1, lastRow, 6).getValues();
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === visitorId) {
      var row = i + 2;
      var count = Number(data[i][3]) || 0;
      sheet.getRange(row, 3).setValue(jst);
      sheet.getRange(row, 4).setValue(count + 1);
      sheet.getRange(row, 5).setValue(page);
      return;
    }
  }
}

function refreshDailySummary_(ss) {
  var visits = ss.getSheetByName(SHEET_VISITS);
  var daily = getOrCreateSheet_(ss, SHEET_DAILY, [
    'Date',
    'Page views',
    'Unique visitors (that day)',
    'New visitors (first visit that day)',
  ]);
  if (!visits || visits.getLastRow() < 2) return;

  var rows = visits.getRange(2, 1, visits.getLastRow(), 7).getValues();
  var byDate = {};

  for (var i = 0; i < rows.length; i++) {
    var ts = rows[i][0];
    var vid = rows[i][1];
    var isNew = rows[i][6] === 'Yes';
    if (!ts || !vid) continue;
    var dateKey = String(ts).slice(0, 10);
    if (!byDate[dateKey]) {
      byDate[dateKey] = { views: 0, uniqueSet: {}, newCount: 0 };
    }
    byDate[dateKey].views++;
    byDate[dateKey].uniqueSet[vid] = true;
    if (isNew) byDate[dateKey].newCount++;
  }

  var dates = Object.keys(byDate).sort();
  daily.getRange(2, 1, Math.max(daily.getLastRow(), 2), 4).clearContent();
  if (dates.length === 0) return;

  var out = [];
  for (var d = 0; d < dates.length; d++) {
    var key = dates[d];
    var bucket = byDate[key];
    var uniqueCount = Object.keys(bucket.uniqueSet).length;
    out.push([key, bucket.views, uniqueCount, bucket.newCount]);
  }
  daily.getRange(2, 1, 1 + out.length, 4).setValues(out);
}

function getOrCreateSheet_(ss, name, headers) {
  var sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
  }
  ensureHeaders_(sheet, headers);
  return sheet;
}

/** Writes row 1 headers if missing or blank */
function ensureHeaders_(sheet, headers) {
  var range = sheet.getRange(1, 1, 1, headers.length);
  var row = range.getValues()[0];
  var blank = row.every(function (cell) {
    return cell === '' || cell === null;
  });
  if (blank) {
    range.setValues([headers]);
    range.setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
}

/** Run this if tabs exist but row 1 has no headers */
function repairHeaders() {
  var ss = getSpreadsheet_();
  getOrCreateSheet_(ss, SHEET_VISITS, [
    'Timestamp (JST)',
    'Visitor ID',
    'Page',
    'Referrer',
    'Language',
    'Site',
    'New visitor',
  ]);
  getOrCreateSheet_(ss, SHEET_UNIQUE, [
    'Visitor ID',
    'First seen (JST)',
    'Last seen (JST)',
    'Visit count',
    'Last page',
    'First referrer',
  ]);
  getOrCreateSheet_(ss, SHEET_DAILY, [
    'Date',
    'Page views',
    'Unique visitors (that day)',
    'New visitors (first visit that day)',
  ]);
  SpreadsheetApp.flush();
  Logger.log('Headers repaired. Open: ' + ss.getUrl());
}

/** Run once: View → Executions → see spreadsheet URL in log */
function showSpreadsheetLink() {
  var ss = getSpreadsheet_();
  Logger.log('Your visitor spreadsheet: ' + ss.getUrl());
  Logger.log('Tabs: ' + ss.getSheets().map(function (s) { return s.getName(); }).join(', '));
}

/** Run once from Apps Script editor: creates tabs and headers */
function setupSpreadsheet() {
  var ss = getSpreadsheet_();
  ss.rename('GenbaSense – Website visitors');
  getOrCreateSheet_(ss, SHEET_VISITS, [
    'Timestamp (JST)',
    'Visitor ID',
    'Page',
    'Referrer',
    'Language',
    'Site',
    'New visitor',
  ]);
  getOrCreateSheet_(ss, SHEET_UNIQUE, [
    'Visitor ID',
    'First seen (JST)',
    'Last seen (JST)',
    'Visit count',
    'Last page',
    'First referrer',
  ]);
  getOrCreateSheet_(ss, SHEET_DAILY, [
    'Date',
    'Page views',
    'Unique visitors (that day)',
    'New visitors (first visit that day)',
  ]);
  var defaultSheet = ss.getSheetByName('Sheet1');
  if (defaultSheet && ss.getSheets().length > 4) {
    ss.deleteSheet(defaultSheet);
  }
  SpreadsheetApp.flush();
  Logger.log('Setup done. Open: ' + ss.getUrl());
  Logger.log('Tabs: ' + ss.getSheets().map(function (s) { return s.getName(); }).join(', '));
}
