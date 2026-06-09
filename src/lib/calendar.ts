// Generates an .ics calendar file for the wedding event and triggers download.
export function downloadWeddingIcs() {
  const start = "20240622T180000"; // 6:00 PM local
  const end = "20240622T230000";
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Jikku & Lena//Wedding//EN",
    "BEGIN:VEVENT",
    "UID:jikku-lena-wedding@invite",
    `DTSTAMP:${start}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    "SUMMARY:Jikku & Lena's Wedding",
    "LOCATION:Bois de Roses, Faitroun, Lebanon",
    "DESCRIPTION:Join us in celebrating the wedding of Jikku & Lena.",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "jikku-lena-wedding.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
