import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PopupContentComponent } from '../popup-content/popup-content.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent {
  // Array to store lifecycle messages
  public lifecycleMessages: string[];
  public textMsg: string;

  // Configuration for MatDialog
  config: MatDialogConfig = {
    hasBackdrop: false,
    backdropClass: '',
    width: '250px',
    height: '',
    position: {
      top: '0',
      left: '50vw'
    },
    panelClass: 'makeItMiddle' // Class Name defined in styles.css
  };

  // Constructor runs when Angular instantiates the component
  constructor(public dialog: MatDialog) {
    // Initialize lifecycleMessages array
    this.lifecycleMessages = [];
    this.textMsg = "";

    // Log message when constructor executes
    this.logMessage('Constructor is called.');
  }

  // ngOnChanges runs every time the component's inputs have changed
  public ngOnChanges(): void {
    // Invoked when the data-bound input properties of a directive change.
    this.logMessage('ngOnChanges is called.');
  }

  // ngOnInit runs once after Angular has initialized all the component's inputs
  public ngOnInit(): void {
    // Invoked after the constructor when Angular initializes the component's data-bound properties.
    this.logMessage('ngOnInit is called.');
  }

  // ngDoCheck runs every time this component is checked for changes
  public ngDoCheck(): void {
    // Invoked whenever Angular checks for changes.
    this.logMessage('ngDoCheck is called.');
  }

  // ngAfterContentInit runs once after the component's content has been initialized
  public ngAfterContentInit(): void {
    // Invoked after Angular projects external content into the component's view.
    this.logMessage('ngAfterContentInit is called.');
  }

  // ngAfterContentChecked runs every time this component content has been checked for changes
  public ngAfterContentChecked(): void {
    // Invoked every time the projected content of a component is checked.
    this.logMessage('ngAfterContentChecked is called.');
  }

  // ngAfterViewInit runs once after the component's view has been initialized
  public ngAfterViewInit(): void {
    // Invoked after Angular initializes the component's views and child views.
    this.logMessage('ngAfterViewInit is called.');
  }

  // ngAfterViewChecked runs every time the component's view has been checked for changes
  public ngAfterViewChecked(): void {
    // Invoked every time the view of the component has been checked.
    this.logMessage('ngAfterViewChecked is called.');
  }

  // ngOnDestroy runs once before the component is destroyed
  public ngOnDestroy(): void {
    // Invoked immediately before Angular destroys the directive or component.
    this.logMessage('ngOnDestroy is called.');
  }

  // Method to add message at start of list
  private logMessage(message: string): void {
    this.lifecycleMessages.unshift(`${message}`);
  }

  // Method to handle button click event
  btnClick() {
    const dialogRef = this.dialog.open(PopupContentComponent, this.config);

    dialogRef.afterClosed().subscribe(result => {
      this.logMessage('Dialog is closed.');
    });
  }
}
