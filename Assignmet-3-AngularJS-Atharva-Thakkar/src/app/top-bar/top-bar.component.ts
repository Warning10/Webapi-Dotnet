import { Component } from '@angular/core';

@Component({
  // Component selector
  selector: 'app-top-bar',

  // Define that this component is standalone
  standalone: true,

  // No additional imports needed for this component
  imports: [],

  // Template URL for the HTML template of the component
  templateUrl: './top-bar.component.html',

  // Style URL for the component's SCSS file
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  // Empty class definition as no additional logic is present in this component
}
