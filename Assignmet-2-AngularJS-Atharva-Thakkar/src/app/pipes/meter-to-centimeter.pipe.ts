import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true, // Indicates that the pipe is standalone
  name: 'meterToCentimeter' // Pipe name
})
export class MeterToCentimeterPipe implements PipeTransform {

  // Method to transform meter value to centimeter
  public transform(value: number): number {
    // Multiply the value by 100 to convert meter to centimeter
    return Number((value * 100).toFixed(2)); // Return the result with 2 decimal places
  }

}
