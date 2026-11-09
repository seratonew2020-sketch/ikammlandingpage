/**
 * =====================================================================
 * Google Apps Script สำหรับบันทึกข้อมูลฟอร์ม "ติดต่อเรา" (IKAMM Home Decor)
 * ลงใน Google Sheet: 1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8
 * =====================================================================
 *
 * วิธีติดตั้ง (ใช้เวลาประมาณ 1 นาที):
 * 1. เปิด Google Sheet:
 *    https://docs.google.com/spreadsheets/d/1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8/edit
 * 2. ที่เมนูด้านบน กด "ส่วนขยาย (Extensions)" -> "Apps Script"
 * 3. ลบโค้ดเดิมทั้งหมด แล้ววางโค้ดไฟล์นี้ลงไป กด Save (ไอคอนแผ่นดิสก์ หรือ Ctrl+S)
 * 4. กดปุ่มสีน้ำเงินมุมขวาบน "ทำให้ใช้งานได้ (Deploy)" -> "การทำให้ใช้งานได้รายการใหม่ (New deployment)"
 * 5. กดไอคอนรูปเฟืองข้าง "เลือกประเภท (Select type)" -> เลือก "เว็บแอป (Web app)"
 * 6. ตั้งค่าดังนี้:
 *    - ดำเนินการในฐานะ (Execute as): "ฉัน (Me)"
 *    - ผู้ที่มีสิทธิ์เข้าถึง (Who has access): "ทุกคน (Anyone)"
 * 7. กด "ทำให้ใช้งานได้ (Deploy)" -> กดอนุญาตสิทธิ์ (Authorize access) ให้เรียบร้อย
 * 8. คัดลอก "URL ของเว็บแอป (Web app URL)" ที่ลงท้ายด้วย /exec
 * 9. นำ URL ไปใส่ในตัวแปร GOOGLE_SCRIPT_URL ในไฟล์ src/App.vue (หรือในไฟล์ .env ชื่อ VITE_GOOGLE_SCRIPT_URL)
 */

const SPREADSHEET_ID = "1mahzBMozB404RTzg4e0FybNVcKoQmrJ-e__iGEAHDF8";
const SHEET_NAME = "Leads";

function getOrCreateSheet() {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "วัน-เวลา (Timestamp)",
      "ชื่อ-นามสกุล (Name)",
      "เบอร์โทรศัพท์ (Phone)",
      "LINE ID",
      "ประเภทที่อยู่อาศัย (Residence)",
      "รายละเอียดเพิ่มเติม (Details)",
      "พื้นที่โดยประมาณ (ตร.ม.)",
      "สไตล์ที่เลือก (Style)",
      "งบประมาณเบื้องต้น (Estimated Budget)",
      "ภาษา (Locale)",
    ]);
    sheet.getRange(1, 1, 1, 10).setFontWeight("bold").setBackground("#123f32").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function doPost(e) {
  try {
    const sheet = getOrCreateSheet();
    let data = {};

    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (_) {
        data = e.parameter || {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    const timestamp = Utilities.formatDate(new Date(), "Asia/Bangkok", "yyyy-MM-dd HH:mm:ss");

    sheet.appendRow([
      timestamp,
      data.name || "-",
      data.phone ? "'" + data.phone : "-",
      data.lineId || "-",
      data.residence || "-",
      data.details || "-",
      data.area || "-",
      data.style || "-",
      data.budget || "-",
      data.locale || "th",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ status: "success", timestamp: timestamp })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ status: "error", message: String(err) })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({
      status: "ok",
      sheetId: SPREADSHEET_ID,
      message: "IKAMM Home Decor Lead Webhook is active.",
    })
  ).setMimeType(ContentService.MimeType.JSON);
}

