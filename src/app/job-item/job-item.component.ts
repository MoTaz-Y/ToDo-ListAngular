import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../job.service';

@Component({
  standalone: true,
  imports: [],
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.css'],
})
export class JobItemComponent {
  @Input() job!: Job;
  @Output() onDelete = new EventEmitter<void>();
  @Output() onChangeStatus = new EventEmitter<'todo' | 'doing' | 'done'>();

  changeStatus(newStatus: 'todo' | 'doing' | 'done') {
    this.onChangeStatus.emit(newStatus);
  }

  deleteJob() {
    this.onDelete.emit();
  }
}
