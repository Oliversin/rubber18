import { Injectable } from '@angular/core';

@Injectable()

export class GlobalVars {
    ourSize = "330,000ft2";
    phone = "+1.909.232.8934";
    phoneCayman = "+1.936.235.2011";
    email = "sales@rotomoldmexico.com";
    emailDev = "oliver@rotomoldmexico.com";
    address1 = "Paseo, Bahía Todos Santos 322, Ex-Ejido Chapultepec, 22785 Ensenada, B.C., Mexico";
    address2 = "15461 Slover Ave, Fontana, CA 92337, United States";
    engineers = "20";
    employees = "500";
    years = "50";
    rotomoldingMachines = $localize `6 rotomolding machines`;
    warehouses = $localize `West Coast, East Coast, and even in Mexico`;
    hours = $localize `Monday - Friday : 8AM - 5:30pm`;


}
