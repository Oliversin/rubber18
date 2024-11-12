import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";
import { Meta, Title } from '@angular/platform-browser';
import { GlobalVars } from '../../global-vars';
@Component({
  selector: 'app-compounding',
  standalone: true,
  imports: [RouterLink, BackToServicesComponent],
  providers:[GlobalVars],
  templateUrl: './compounding.component.html',
  styleUrl: './compounding.component.css'
})
export default class CompoundingComponent {

}
