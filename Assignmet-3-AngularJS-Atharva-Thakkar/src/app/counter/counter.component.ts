import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  // Input property to receive the name from the parent component
  @Input() name: string = '';

  // Input property to receive the value from the parent component
  @Input() val: number = 0;

  // Output event emitter to send the changed value back to the parent component
  @Output() changed = new EventEmitter<number>();

  // Method to increment the value and emit the updated value
  inc() {
    this.changed.emit(this.val + 1);
  }

  // Method to decrement the value and emit the updated value
  dec() {
    // Ensure the value doesn't go below 0
    this.changed.emit(this.val - 1 < 0 ? 0 : this.val - 1);
  }
}
