// ============================================================
// TokenCap Review System — Google Apps Script
// ============================================================
// SETUP:
// 1. Go to script.google.com → open this project
// 2. Sheet tab must be named: Reviews
//    Headers in row 1: name | email | role | q1 | q2 | q3 | q4 | q5 | suggestion | date
// 3. Deploy as Web App:
//    - Execute as: Me
//    - Who has access: Anyone   ← MUST be "Anyone", NOT "Google Account"
// 4. Copy the Web App URL into .env.local as REVIEWS_SCRIPT_URL
// ============================================================

const SHEET_ID   = "1ijlJCGrkFN_4dW-2-9m-nenDkHAKNko7cneKffiGKms";
const SHEET_NAME = "Reviews";

function doPost(e) {
  try {
    const sheet = SpreadsheetApp
      .openById(SHEET_ID)
      .getSheetByName(SHEET_NAME);

    const p = JSON.parse(e.postData.contents);

    sheet.appendRow([
      p.name       || "",
      p.email      || "",
      p.role       || "",
      p.q1         || "",
      p.q2         || "",
      p.q3         || "",
      p.q4         || "",
      p.q5         || "",
      p.suggestion || "",
      new Date().toISOString(),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Health check
function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
