// Import necessary modules and components
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-root', // Component selector (used in HTML templates)
  standalone: true, // Indicates that this component is standalone (not part of a larger module)
  imports: [
    ReactiveFormsModule, // Import the ReactiveFormsModule for form handling
    RouterOutlet, // Import the RouterOutlet for routing
    TopBarComponent, // Import the TopBarComponent
    SideBarComponent, // Import the SideBarComponent
    MainSectionComponent, // Import the MainSectionComponent
    FormsModule, // Import FormsModule for two-way data binding
    RouterLink, // Import RouterLink for navigation links
    RouterLinkActive, // Import RouterLinkActive for active link styling
    NgbModule, // Import NgbModule (Bootstrap components)
    CommonModule, // Import CommonModule (used for common Angular features)
    MatDialogModule
  ],
  templateUrl: './app.component.html', // Path to the HTML template file
  styleUrl: './app.component.scss', // Path to the SCSS (styles) file
})
export class AppComponent {
  title = 'AngularConnect'; // A property to store the title of the app
}
