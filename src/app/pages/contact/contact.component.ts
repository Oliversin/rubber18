import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import emailjs from '@emailjs/browser';
import { CaptchaComponent } from '../../shared/components/captcha/captcha.component';


@Component({
  selector: 'app-contact',
  standalone: true,
  providers:[GlobalVars],
  imports: [ReactiveFormsModule, CommonModule,CaptchaComponent,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent implements OnInit{
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
  
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars, private builder: FormBuilder) {
    this.contactForm = this.builder.group({
      from_name: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      phone: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    
    this.titleService.setTitle('Contact Us - Rotomold Mexico');

    // Standard Meta Tags
    this.addMetaTag('description', 'Don’t hesitate to reach out! Whether you prefer email or a phone call, we at RotomoldMexico are here to turn your ideas into reality. Request a quote today, and let’s bring your vision to life!');
    this.addMetaTag('keywords', 'Contact, Rotomold Mexico, Customer Service, Inquiries, Support');

    // Open Graph Meta Tags
    this.addMetaTag('og:title', 'Contact Us - Rotomold Mexico', 'property');
    this.addMetaTag('og:description', 'Don’t hesitate to reach out! Whether you prefer email or a phone call, we at RotomoldMexico are here to turn your ideas into reality. Request a quote today, and let’s bring your vision to life!', 'property');
    this.addMetaTag('og:image', '/assets/contactImage.png', 'property'); // Update with the correct image path

    // Twitter Card Tags
    this.addMetaTag('twitter:card', 'summary_large_image');
    this.addMetaTag('twitter:title', 'Contact Us - Rotomold Mexico');
    this.addMetaTag('twitter:description', 'Don’t hesitate to reach out! Whether you prefer email or a phone call, we at RotomoldMexico are here to turn your ideas into reality. Request a quote today, and let’s bring your vision to life!');
    this.addMetaTag('twitter:image', '/assets/contactImage.png'); // Update with the correct image path

    // Robots Meta Tag
    this.addMetaTag('robots', 'index, follow');
    //this.contactForm.disable();
  }
  private addMetaTag(name: string, content: string, type: string = 'name') {
    if (!this.meta.getTag(`${type}='${name}'`)) {
      this.meta.addTag({ [type]: name, content });
    }
  }
  
  async send() {
    if (this.contactForm.valid && this.captchaComponent.isCaptchaValid()) {
      emailjs.init('R7d_uy4V2Q7hRVp09');
      await emailjs.send("service_4prd4mk", "template_sdsy1qb", this.contactForm.value);
      alert('Message has been sent');
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