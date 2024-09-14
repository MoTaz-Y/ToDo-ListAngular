import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { TodoColumnComponent } from './todo-column.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [TodoColumnComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule],
  exports: [TodoColumnComponent],
  // ...
})
export class TodoColumnModule {}

describe('TodoColumnComponent', () => {
  let component: TodoColumnComponent;
  let fixture: ComponentFixture<TodoColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoColumnModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
