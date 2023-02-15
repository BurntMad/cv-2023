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
    about: "I am a highly skilled and motivated junior web application developer with experience in Angular, HTML, CSS, Javascript, and Git. I have a strong work ethic, honed through my previous experience in basic military service, and am an excellent team player. I have a strong academic background, having successfully completed the South African National Senior Certificate with university entrance qualification and several German language courses. I also completed a 5-month web development course at the Coding School Wörthersee and an IT apprenticeship, where I gained hands-on experience with mechatronics technology. I have a passion for web development and am constantly seeking opportunities to learn and grow in this field. My structured and organized approach, combined with my attention to detail, make me well-suited for complex and time-consuming projects."
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
    about: "Ich bin ein hochqualifizierter und motivierter Junior Web-Entwickler mit Erfahrung in Angular, HTML, CSS, Javascript und Git. Ich habe ein starkes Arbeitsethik, geschärft durch meine vorherige Erfahrung in der Grundausbildung, und bin ein ausgezeichneter Teamplayer. Ich habe einen starken akademischen Hintergrund, habe erfolgreich das Südafrikanische National Senior Certificate mit Universitätszugangsberechtigung und mehrere deutsche Sprachkurse abgeschlossen. Ich habe auch einen 5-monatigen Web-Entwicklungs-Kurs an der Coding School Wörthersee und eine IT-Ausbildung abgeschlossen, wo ich praktische Erfahrung mit Mechatronik gesammelt habe. Ich habe eine Leidenschaft für Web-Entwicklung und suche ständig nach Möglichkeiten, in diesem Bereich zu lernen und zu wachsen. Meine strukturierte und organisierte Herangehensweise, zusammen mit meiner Aufmerksamkeit für Details, machen mich für komplexe und zeitaufwändige Projekte gut geeignet."
  }
];
}