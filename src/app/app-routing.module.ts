import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ButtonToggleComponent} from './button-toggle/button-toggle.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'button-toggle', component: ButtonToggleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
