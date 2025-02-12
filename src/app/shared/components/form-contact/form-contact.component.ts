import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import emailjs from '@emailjs/browser';
import { CaptchaComponent } from '../../../shared/components/captcha/captcha.component';
import Swal from 'sweetalert2';
import { GlobalVars } from '../../../global-vars';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,CaptchaComponent,NgClass],
  providers: [GlobalVars],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.css'
})
export class FormContactComponent {
  @ViewChild(CaptchaComponent) captchaComponent!: CaptchaComponent;
  contactForm: FormGroup;

  get fromName(){
    return this.contactForm.get('from_name')
  }
  get formEmail(){
    return this.contactForm.get('email')
  }
  get formSubject(){
    return this.contactForm.get('subject')
  }
  get formPhone(){
    return this.contactForm.get('phone')
  }
  get formMessage(){
    return this.contactForm.get('message')
  }

  
  constructor( protected vars:GlobalVars, private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      from_name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),

      ///test
      ourEmail: new FormControl('sales2@rubber-mexico.com'),
    });
   }


   async send() {
    if (this.contactForm.valid && this.captchaComponent.isCaptchaValid()) {
      emailjs.init('R7d_uy4V2Q7hRVp09');
      await emailjs.send("service_4prd4mk", "template_sdsy1qb", this.contactForm.value);
      Swal.fire({
        title: "Thank you!",
        text:"We’ve received your form submission. Our team will get back to you as soon as possible.",
        width: 600,
        icon: "success",
        timer: 2700,
        timerProgressBar: true,
        padding: "3em",
        color: "#3392b8",
        backdrop: `
          rgba(51,146,184,0.4)
          url("/assets/email-sent2.gif")
          left top
          no-repeat
        `
      });
      this.contactForm.reset();
      this.captchaComponent.token = null;  // Reset the captcha token
    } else {
      alert('Please fill all fields correctly and solve the captcha.');
    }
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }


}
