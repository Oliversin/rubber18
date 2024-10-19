import { Component } from '@angular/core';
import { CardInputComponent } from '../../shared/components/card-input/card-input.component';

@Component({
  selector: 'app-engineers',
  standalone: true,
  imports: [CardInputComponent],
  templateUrl: './engineers.component.html',
  styleUrl: './engineers.component.css'
})
export default class EngineersComponent {

}
