import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JobFormComponent } from './job-form/job-form.component';
import { TodoColumnComponent } from './todo-column/todo-column.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JobFormComponent, TodoColumnComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-app';
}
