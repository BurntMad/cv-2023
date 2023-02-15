import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {
  constructor() { }
  certificates = [
    {
      "name": "BFI Kärnten - B1 Sprachzertifikat Deutsch",
      "description": "Über das Kärntner Berufsförderungsinstitut habe ich einen 315-stündigen Kurs Deutch-Intensivausbildung mit Praktikum absolviert und im Dezember erfolgreich abgeschlossen.",
      "img": 'assets/images/b1jared.png',
      "pdf": 'assets/pdf/Jared-Naschenweng-ÖSD B1.pdf'
    },
    {
      "name": "Student Web Developer",
      "description": "Über die Coding School & Academy Wörthersee habe ich einen 5-monatigen Vollzeitkurs in Webdevelopment",
      "img": 'assets/images/codingschool.png',
      "pdf": 'assets/pdf/Jcodingschool.pdf'
    },
    {
      "name": "Pinnicle College Kyalami Matric Certificate",
      "description": "Besuchte für 8 Jahre das Internat in Johannesburg, Südafrika. Während meiner Schulzeit studierte ich Kunst, war ein aktives Mitglied im Studentenverband und war aktiv mit Öffentlichkeitsarbeit in der Schule tätig.",
      "img": 'assets/images/2019-06-19 Jared - Matric Certificate.png',
      "pdf": 'assets/pdf/2019-06-19 Jared - Matric Certificate.pdf'
    },
    {
      "name": "Soldat in Grundausbildung",
      "description": "Ableistung des Grundwehrdienstes im Villach Pionier Bataillon. Meine 6-monatige Grundausbildung erforderte Kraft und Geschick und ich lernte meine Kameraden sowohl am Land als auch am Wasser zu unterstützen. Während meiner Grundausbildung habe ich neben der militärischen Ausbildung auch an zahlreichen handwerklichen Projekten wie der Errichtung von Sperren, bauen von Schutzdeckungen und Stellungen gelernt. Neben meiner Wach- und Waffenausbildung habe ich eine vertiefende Erste Hilfe Ausbildung als auch handwerkliche Ausbildung (z.b. Kettensägen Ausbildung) genossen.",
      "img": 'assets/images/2019-09-27 Jared Bundesheer Verleihungsurkunde.png',
      "pdf": 'assets/pdf/2019-09-27 Jared Bundesheer Verleihungsurkunde.pdf'
    },
  ]
}
