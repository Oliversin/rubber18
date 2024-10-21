import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";

@Component({
  selector: 'app-rotational-molding',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  templateUrl: './rotational-molding.component.html',
  styleUrl: './rotational-molding.component.css'
})
export default class RotationalMoldingComponent {

}
