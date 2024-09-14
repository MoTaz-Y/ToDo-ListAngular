import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Job {
  id: number;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobsSubject = new BehaviorSubject<Job[]>([]);
  jobs$ = this.jobsSubject.asObservable();
  
  private jobs: Job[] = [];
  private idCounter = 1;

  addJob(job: Job) {
    job.id = this.idCounter++;
    this.jobs.push(job);
    this.jobsSubject.next(this.jobs);
  }

  updateJob(job: Job) {
    const index = this.jobs.findIndex(j => j.id === job.id);
    if (index !== -1) {
      this.jobs[index] = job;
      this.jobsSubject.next(this.jobs);
    }
  }

  deleteJob(id: number) {
    this.jobs = this.jobs.filter(job => job.id !== id);
    this.jobsSubject.next(this.jobs);
  }

  changeJobStatus(id: number, status: 'todo' | 'doing' | 'done') {
    const job = this.jobs.find(j => j.id === id);
    if (job) {
      job.status = status;
      this.jobsSubject.next(this.jobs);
    }
  }
}