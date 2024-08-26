import { Routes } from '@angular/router';

// Importing components for each route
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { EmitterComponent } from './emitter/emitter.component';

// Define the routes array
export const routes: Routes = [
  // Default route to MainSectionComponent
  { path: "", component: MainSectionComponent },
  // Route for component-interaction operation
  { path: "component-interaction", component: ComponentInteractionComponent },
  // Route for lifecycle operation
  { path: "lifecycle", component: LifeCycleComponent },
  // Route for emitter operation
  { path: "emitter", component: EmitterComponent },
];
