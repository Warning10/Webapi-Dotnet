import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-interaction',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './component-interaction.component.html',
  styleUrl: './component-interaction.component.scss'
})
export class ComponentInteractionComponent {
  // Input property to receive message from parent component
  @Input() message: string = '';

  // Output event emitter to send message to parent component
  @Output() messageChanged = new EventEmitter<string>();

  // Variable to hold the message from child component
  childMessage: string = '';

  // Method to emit the message to parent component
  sendMessage() {
    this.messageChanged.emit(this.childMessage);
  }
}
