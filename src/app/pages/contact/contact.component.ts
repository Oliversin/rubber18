import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  providers:[GlobalVars],
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export default class ContactComponent implements OnInit{
  

  contactForm:FormGroup = this.builder.group({
    from_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  constructor(private meta: Meta, private titleService: Title, protected vars:GlobalVars, private builder: FormBuilder) { }

  ngOnInit(): void {
    this.titleService.setTitle('Rotomold Mexico - Contact Us');

    // Standard Meta Tags
    this.meta.addTag({ name: 'description', content: 'Don’t hesitate to reach out! Whether you prefer email or a phone call, we at RotomoldMexico are here to turn your ideas into reality. Request a quote today, and let’s bring your vision to life!' });
    this.meta.addTag({ name: 'keywords', content: 'Rotational Molding, Rotomold Mexico, Mold Making, Foam Insulation, Shipping, Stocking, Compression Molding, Extrusion, Rapid Prototyping, Quality Manufacturing' });

    // Open Graph Meta Tags
    this.meta.addTag({ property: 'og:title', content: 'RotomoldMexico - Home' });
    this.meta.addTag({ property: 'og:description', content: 'Don’t hesitate to reach out! Whether you prefer email or a phone call, we at RotomoldMexico are here to turn your ideas into reality. Request a quote today, and let’s bring your vision to life!' });
    this.meta.addTag({ property: 'og:image', content: '/assets/logoHeader.png' });
    //this.contactForm.disable();
  }
  async send(){
    emailjs.init('R7d_uy4V2Q7hRVp09');
    let response = await emailjs.send("service_4prd4mk","template_sdsy1qb",{
      from_name: this.contactForm.value.from_name,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      email: this.contactForm.value.email,
      phone: this.contactForm.value.phone,
      });

      alert('Message has been sent');
      this.contactForm.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.contactForm.value);
  }
}
