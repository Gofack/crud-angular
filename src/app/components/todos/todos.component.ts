import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
	selector: 'app-todos',
	templateUrl: './todos.component.html',
	styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
	todos: Todo[] = [];

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {
		this.todos = this.todoService.getTodos();
	}

	clearList(arr: []) {
		this.todos = arr;
	}

	removeTodo(text: string) {
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].text === text) {
				this.todos.splice(i, 1);
			}
		}

		this.todoService.removeTodo(text);
	}
}
