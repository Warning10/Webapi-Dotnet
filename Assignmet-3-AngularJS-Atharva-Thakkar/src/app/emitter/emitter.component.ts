import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent {
  // Initialize counts for burgers and pizzas
  burgers = 0;
  pizzas = 0;

  // Initialize totalItems to zero
  totalItems = 0;

  constructor() {
    // Calculate total items initially
    this.calculateTotalItems();
  }

  // Method to handle changes in the number of burgers
  burgersChanged(count: number) {
    this.burgers = count;
    // Recalculate total items
    this.calculateTotalItems();
  }

  // Method to handle changes in the number of pizzas
  pizzasChanged(count: number) {
    this.pizzas = count;
    // Recalculate total items
    this.calculateTotalItems();
  }

  // Method to calculate total items
  calculateTotalItems() {
    this.totalItems = this.burgers + this.pizzas;
  }
}
