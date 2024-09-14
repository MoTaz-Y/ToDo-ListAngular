import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JobFormComponent } from './job-form/job-form.component';
import { CommonModule } from '@angular/common';

// Remove the bootstrap array from the NgModule
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    JobFormComponent,
    AppComponent,
    FormsModule,
    CommonModule,
  ],
  providers: [],
})
export class AppModule {}

// Use the bootstrapApplication function to bootstrap your application
import { bootstrapApplication } from '@angular/platform-browser';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
