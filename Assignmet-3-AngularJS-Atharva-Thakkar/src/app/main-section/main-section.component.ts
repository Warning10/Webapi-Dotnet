import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ComponentInteractionComponent } from '../component-interaction/component-interaction.component';

@Component({
  selector: 'app-main-section',
  standalone: true,
  imports: [FormsModule, CommonModule, ComponentInteractionComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {

  // Input property to receive message from parent component
  parentMessage: string = '';

  // Property to hold message from child component
  childMessage: string = '';

  // Method to handle message change from child component
  onMessageChanged(message: string) {
    this.childMessage = message;
  }

}
