import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // Import RouterLink for navigation

@Component({
  selector: 'app-side-bar', // Selector for the component
  standalone: true, // Indicate that this component is standalone
  imports: [RouterLink], // Import RouterLink for navigation
  templateUrl: './side-bar.component.html', // HTML template file for the component
  styleUrl: './side-bar.component.scss' // SCSS style file for the component
})
export class SideBarComponent {
  // Class definition for the SideBarComponent
}
