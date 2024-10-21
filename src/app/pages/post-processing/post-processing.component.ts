import { Component } from '@angular/core';
import { BackToServicesComponent } from "../../shared/back-to-services/back-to-services.component";

@Component({
  selector: 'app-post-processing',
  standalone: true,
  imports: [BackToServicesComponent],
  templateUrl: './post-processing.component.html',
  styleUrl: './post-processing.component.css'
})
export default class PostProcessingComponent {

}
