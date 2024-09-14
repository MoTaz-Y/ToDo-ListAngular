import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobService, Job } from '../job.service';
import { FormsModule } from '@angular/forms';
import { JobItemComponent } from '../job-item/job-item.component';

@Component({
  selector: 'app-todo-column',
  standalone: true, // Add this option
  imports: [CommonModule, FormsModule, JobItemComponent],
  templateUrl: './todo-column.component.html',
  styleUrls: ['./todo-column.component.css'],
})
export class TodoColumnComponent {
  @Input() status!: 'todo' | 'doing' | 'done';
  jobs: Job[] = [];

  constructor(private jobService: JobService) {
    this.jobService.jobs$.subscribe((jobs) => {
      this.jobs = jobs.filter((job) => job.status === this.status);
    });
  }

  changeStatus(id: number, newStatus: 'todo' | 'doing' | 'done') {
    this.jobService.changeJobStatus(id, newStatus);
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id);
  }
}
