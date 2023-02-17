import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
 experienceDE: any[] = [
    {
      date_start: "Jun 2022",
      date_end: "Feb 2023",
      company: "Alpsware GmbH",
      url: "https://alpsware.at/",
      position: "Web Application Developer",
      description: '<p>Als Junior Web Developer bei Alpsware war ich Teil des Entwicklungsteams von Juni 2022 bis Februar 2023. Während dieser Zeit war ich an mehreren Projekten beteiligt, die meine Fähigkeiten verbesserten und zum Wachstum des Unternehmens beitrugen.<br><br> Ich war verantwortlich für die Entwicklung und Gestaltung einer Wordpress-Website für eine öffentliche Schule, VS Völkermarkt, unter Verwendung von Wordpress und PHP. Darüber hinaus nutzte ich Tailwind CSS, um eine ansprechende und benutzerfreundliche Website zu erstellen.<br><br> Ich entwickelte auch die Komponente "TAS Configs" in Angular, das eine Konfigurationsverwaltung für das TAS-Produkt mit Funktionalitäten wie Filtern, Suchen und Geräte-Upload bereitstellte.<br><br> Ich nutzte Azure DevOps, um den Entwicklungsprozess zu verwalten und eine reibungslose Zusammenarbeit und effiziente Projektlieferung zu gewährleisten. Außerdem habe ich an der Entwicklung einer internen Lizenzierungs-App für Alpsware mit Pocketbase.io und Angular mitgewirkt.</p>',
    },
    {
      date_start: "Sep 2021",
      date_end: "Feb 2022",
      company: "Coding School & Academy Wörthersee",
      url: "https://csaw.at/",
      position: "Student Web Developer",
      description: '<p>Über die Coding School & Academy Wörthersee habe ich einen 5-monatigen Vollzeitkurs in Webdevelopment mit den folgenden Themen absolviert:<br><ul><li>✅ Einführung in HTML & CSS (2 Wochen): HTML properties, CSS layouts, Sass</li> <li>✅ Grundlagen der Programmierung & Javascript (3 Wochen): Javascript web development</li> <li>🏆 Coding challenge1: Website mit timeline Karussel zur Anzeige von Persönlichen Erfolgen</li> <li>✅ Sourecodeversionierung mit Gitlab (1 Woche)</li> <li>✅ Webentwicklung Advanced und Networking, Websockets & Polling (3 Wochen)</li> <li>✅ Datenmanagement und Datenbankzugriff (1 Woche)</li> <li>🏆 Coding challenge2: Clone der Raiffeisenbank "Sumsi" website mit Uploads und API Integration</li> <li>✅ VueJS, User Centered Design und Objekt Orientierte Programmierung (6 Wochen)</li> <li>🏆 Coding challenge3: Tischreservierungssystem via VueJS und API IntegrationÜber</li></ul></p>',
    },
    {
      date_start: "Feb 2021",
      date_end: "May 2021",
      company: "SDG - Samlinux Development Group",
      url: "https://samlinux.at/",
      position: "Lehre Softwareapplikationsentwicklung",
      description: 'Während meiner drei-monatigen Schnupperlehre als Software-Entwickler bei samlinux.at habe ich meine Kenntnisse in Softwareentwicklung erweitert. Mein Fokus war hands-on wo ich neben dem Testen der Applikation auch mit Softwareentwicklung mit den Technologien Java (Backend), HTML / CSS (Frontends) und auch Linux beschäftigt war.',
    },
  ];
}
