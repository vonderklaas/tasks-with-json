import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Task } from 'src/app/interfaces/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  public text!: string;
  public day!: string;
  public reminder: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.cleanFormInputs();
  }

  cleanFormInputs() {
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
