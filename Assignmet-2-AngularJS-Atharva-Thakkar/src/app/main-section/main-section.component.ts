import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MeterToCentimeterPipe } from '../pipes/meter-to-centimeter.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-main-section', // Component selector
  standalone: true, // Indication that the component is standalone
  imports: [FormsModule, MeterToCentimeterPipe, CommonModule], // Imported modules
  templateUrl: './main-section.component.html', // Template URL
  styleUrl: './main-section.component.scss' // Style URL
})
export class MainSectionComponent {

   // Declared variables
   public yourName: string = 'Atharva Thakkar'; // Default value for yourName
   public buttonId: string = 'displayButton'; // Button ID
   public isError: boolean = false; // Error state
   public isAvailable: boolean = false; // Availability state
   public meter: number = 0; // Meter value
   public outputValue: string = ''; // Output value

   // Method to update the output value
   updateOutput(value: string) {
     this.outputValue = value;
   }
 
   // Array of months
   public listOfMonths: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
   
   // Method to toggle the error state
   public toggleErrorState(): void {
     this.isError = !this.isError; // Toggle the isError state
   }
 
   // Method to check valid meter input
   public isValidMeterInput(): boolean {
     // Regular expression to validate meter input (accepts numbers and one optional decimal point)
     return /^(?:\d*\.?\d+)?$/.test(String(this.meter));
   }
}
