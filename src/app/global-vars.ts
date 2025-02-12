import { Injectable } from '@angular/core';

@Injectable()

export class GlobalVars {
    ourSize = "330,000 ft²";
    phone = "+1.909.232.8934";
    phoneCayman = "+1.936.235.2011";
    email = "sales2@rubber-mexico.com";
    emailDev = "oliver@rubber-mexico.com";
    address1 = "Blvd. Zertuche 1860, Parque Industrial Chapultepec, 22785 Ensenada, B.C., Mexico";
    address2 = "15461 Slover Ave, Fontana, CA 92337, United States";
    engineers = "20";
    employees = "500";
    years = "50";
    rotomoldingMachines = $localize `37 CNC machines`;
    warehouses = $localize `West Coast, East Coast, and even in Mexico`;
    hours = $localize `Monday - Friday : 8AM - 5:30pm`;
    logoImage= "assets/logoHeaderino.png";

    ///contentThatDidntExpectToneedToReuseThatManyTimes
    materialsImage = '/assets/materials.jpg'
    moldMakingImage = '/assets/moldMaking.jpg'

    navItems = [
        { label: 'Home', link: '/home' },
        { label: 'Services', link: '/services' },
        { label: 'About', link: '/about' },
        { label: 'Quality', link: '/quality' },
        { label: 'FAQ', link: '/faq' },
        { label: 'Contact', link: '/contact' },
        
      ];

      services =  [
        { label: 'Rubber Molding', link: '/services/rubber-molding' },
        { label: 'Mandrel Formed Hoses', link: '/services/mandrel-formed-hoses' },
        { label: 'Rubber Extrusion', link: '/services/rubber-extrusion' },
        { label: 'Compounding', link: '/services/compounding' },
        { label: 'Calendering', link: '/services/calendering' },
        { label: 'Shipping & Stocking', link: '/services/shipping' },
        
      ];


}
