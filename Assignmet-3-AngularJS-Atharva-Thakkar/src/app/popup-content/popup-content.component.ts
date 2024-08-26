import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-content',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './popup-content.component.html',
  styleUrl: './popup-content.component.scss'
})
export class PopupContentComponent {
  constructor(public dialogRef: MatDialogRef<PopupContentComponent>) {
    // Constructor to initialize the MatDialogRef
  }

  // Method to close the dialog
  closeDialog(): void {
    this.dialogRef.close();
  }
}
