import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
profileInfoEN: any[] = [
  {
    name: "Jared Naschenweng",
    age: 24,
    email: "jared@naschenweng.info",
    phone: "+43 670 2009345",
    image: "assets/images/Jared_Professional.jpg",
    description: "Junior Software Developer. As a computer-savvy person, I think logically and look for pragmatic solutions. I believe that one learns through experience.",
    about: "<p>Ich bin ein hochqualifizierter und motivierter Junior Web-Entwickler mit Erfahrung in Angular, HTML, CSS, Javascript und Git. Ich habe ein starkes Arbeitsethik, geschärft durch meine vorherige Erfahrung in der Grundausbildung, und bin ein ausgezeichneter Teamplayer.<br><br> Mein Abitur (Matura) habe ich in Johannesburg, Südafrika über das South African National Senior Certificate mit Universitätszulassung abgeschlossen. Ich habe auch einen 5-monatigen Web-Entwicklungskurs an der Coding School Wörthersee und eine IT-Lehre absolviert, bei der ich praktische Erfahrungen in Mechatronik gewonnen habe.<br><br> Meine Leidenschaft ist in Informationstechnologie und Softwareentwicklung und suche ständig nach Möglichkeiten, in diesem Bereich zu lernen und zu wachsen. Meine strukturierte und organisierte Herangehensweise, kombiniert mit meiner Aufmerksamkeit für Details, machen mich für komplexe und zeitaufwändige Projekte gut geeignet.</p>"
}
];
profileInfoDE: any[] = [
  {
    name: "Jared Naschenweng",
    age: 24,
    email: "",
    phone: "+43 670 2009345",
    image: "assets/images/Jared_Professional.jpg",
    description: "",
    about: "<p>Ich bin ein hochqualifizierter und motivierter Junior Web-Entwickler mit Erfahrung in Angular, HTML, CSS, Javascript und Git. Ich habe ein starkes Arbeitsethik, geschärft durch meine vorherige Erfahrung in der Grundausbildung, und bin ein ausgezeichneter Teamplayer.<br><br> Mein Abitur (Matura) habe ich in Johannesburg, Südafrika über das South African National Senior Certificate mit Universitätszulassung abgeschlossen. Ich habe auch einen 5-monatigen Web-Entwicklungskurs an der Coding School Wörthersee und eine IT-Lehre absolviert, bei der ich praktische Erfahrungen in Mechatronik gewonnen habe.<br><br> Meine Leidenschaft ist in Informationstechnologie und Softwareentwicklung und suche ständig nach Möglichkeiten, in diesem Bereich zu lernen und zu wachsen. Meine strukturierte und organisierte Herangehensweise, kombiniert mit meiner Aufmerksamkeit für Details, machen mich für komplexe und zeitaufwändige Projekte gut geeignet.</p>"
  }
];
}