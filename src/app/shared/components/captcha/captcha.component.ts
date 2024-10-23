import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha-2';


@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [RecaptchaModule,FormsModule,CommonModule],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.css'
})
export class CaptchaComponent {
  token: string | null = null;

  constructor() {}

  onCaptchaSuccess(token: string | null) {  // Accept string | null
    this.token = token;
    console.log("Captcha Token:", token);
  }

  isCaptchaValid(): boolean {
    return this.token !== null; // Ensure token is not null
  }
}
