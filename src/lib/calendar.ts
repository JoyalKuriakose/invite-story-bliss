export function downloadWeddingIcs() {
  const event = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
DTSTART:20260824T053000Z
DTEND:20260824T073000Z
SUMMARY:Jikku & Lena Wedding Ceremony
LOCATION:St George Jacobite Syrian Church Ponpally, Kottayam, Kerala
DESCRIPTION:Wedding Ceremony
END:VEVENT
END:VCALENDAR
  `;

  const blob = new Blob([event], { type: "text/calendar;charset=utf-8" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "wedding-invitation.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}