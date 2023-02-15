import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { CertificateService } from './certificate.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  profile: any[] = [];
  certificates: any[] = [];
  showContactModal: boolean = false;
  contactForm: FormGroup;
  constructor(
    private profileService: ProfileService, 
    private certificateService: CertificateService
  ) {}
  ngOnInit() {
    this.profile = this.profileService.profileInfoEN;
    this.certificates = this.certificateService.certificates;
  }
  openModal() {
    this.showContactModal = true;
  }

  closeModal() {
    this.showContactModal = false;
  }
}
