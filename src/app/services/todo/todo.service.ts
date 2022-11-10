import { Injectable } from '@angular/core';
import { Init } from 'src/app/init-todos';
import { Todo } from 'src/app/interfaces/todo';

@Injectable({
	providedIn: 'root'
})
export class TodoService extends Init {

	constructor() {
		super();
		this.load();
	}

	getTodos() {
		let todos = JSON.parse(localStorage.getItem('todos') || '{}');
		return todos;
	}

	clearTodos() {
		let todos: [] = [];
		// localStorage.setItem('todos', '');
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	removeTodo(text: string) {
		let todos = JSON.parse(localStorage.getItem('todos') || '{}');
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].text === text) {
				todos.splice(i, 1);
			}
		}
		localStorage.setItem('todos', JSON.stringify(todos));
	}

	addTodo(text: string): boolean {
		let todos = JSON.parse(localStorage.getItem('todos') || '{}');
		let match = [];
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].text === text) {
				match.push(todos[i].text);
			}
		}
		if (match.length === 0) {
			console.log(text);
			todos.push({ text: text });
			localStorage.setItem('todos', JSON.stringify(todos));
			return true;
		} else {
			return false
		}
	}
}
