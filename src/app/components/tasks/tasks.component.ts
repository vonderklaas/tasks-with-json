import { Component, OnInit } from '@angular/core';

// Tasks
import { Task } from 'src/app/interfaces/Task';
import { TASKS } from 'src/app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = TASKS;

  constructor() {}

  ngOnInit(): void {
    console.log(TASKS);
  }
}
