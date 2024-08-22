// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router'; // Import RouterModule
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    BindingComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    CommonModule,
    RouterModule.forRoot(routes)// Add RouterModule here if not using a separate routing module
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
