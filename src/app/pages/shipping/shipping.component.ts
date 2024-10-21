import { Component } from '@angular/core';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";

@Component({
  selector: 'app-shipping',
  standalone: true,
  imports: [BackToServicesComponent],
  templateUrl: './shipping.component.html',
  styleUrl: './shipping.component.css'
})
export default class ShippingComponent {

}
