// Import necessary modules and components
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';

@Component({
  selector: 'app-root', // Component selector (used in HTML templates)
  standalone: true, // Indicates that this component is standalone (not part of a larger module)
  imports: [
    RouterOutlet, // Import the RouterOutlet for routing
    TopBarComponent, // Import the TopBarComponent
    SideBarComponent, // Import the SideBarComponent
    MainSectionComponent, // Import the MainSectionComponent
  ],
  templateUrl: './app.component.html', // Path to the HTML template file
  styleUrl: './app.component.scss', // Path to the SCSS (styles) file
})
export class AppComponent {
  title = 'AngularEnhance'; // A property to store the title of the app
}
