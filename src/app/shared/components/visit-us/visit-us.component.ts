import { Component } from '@angular/core';
import { GlobalVars } from '../../../global-vars';

@Component({
  selector: 'app-visit-us',
  standalone: true,
  providers:[GlobalVars],
  imports: [],
  templateUrl: './visit-us.component.html',
  styleUrl: './visit-us.component.css'
})
export class VisitUsComponent {
  constructor(protected vars:GlobalVars) { }
}
