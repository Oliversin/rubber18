import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";

@Component({
  selector: 'app-other-services',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  templateUrl: './other-services.component.html',
  styleUrl: './other-services.component.css'
})
export default class OtherServicesComponent {

}
