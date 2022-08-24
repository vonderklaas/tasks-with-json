import { Component, OnInit } from '@angular/core';

import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  public tasks: Task[] = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}
}
