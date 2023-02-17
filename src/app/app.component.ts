import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { CertificateService } from './certificate.service';
import { ExperienceService } from './experience.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile: any[] = [];
  certificates: any[] = [];
  experiences: any[] = [];
  contactForm: FormGroup;
  constructor(
    private profileService: ProfileService, 
    private certificateService: CertificateService,
    private experienceService: ExperienceService
  ) {}
  ngOnInit() {
    this.profile = this.profileService.profileInfoEN;
    this.certificates = this.certificateService.certificates;
    this.experiences = this.experienceService.experienceDE;
  }

}
