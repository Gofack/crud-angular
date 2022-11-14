import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Router } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';

@Component({
	selector: 'app-edit-todo',
	templateUrl: './edit-todo.component.html',
	styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
	todos: Todo[] = [];
	message = '';
	text: string = '';
	route = this.router.url;
	todoId = this.route[this.route.length - 1];
	editTodoForm = new FormGroup({
		textarea: new FormControl('', Validators.minLength(5)),
	})

	constructor(
		private todoService: TodoService,
		private router: Router) { }

	ngOnInit(): void {
		this.todos = this.todoService.getTodos();
		this.editTodoForm.controls['textarea'].setValue(this.todos[Number(this.todoId)].text);
	}

	editTodo() {
		let oldTodo = this.todos[Number(this.todoId)].text;
		this.text = this.editTodoForm.value.textarea;
		for (let i = 0; i < this.todos.length; i++) {
			if (this.todos[i].text === oldTodo) {
				this.todos[i].text = this.text;
			}
		}

		this.todoService.updateTodo(oldTodo, this.text);
		this.router.navigate(['/']);
	}
}
