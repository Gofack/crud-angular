import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
	selector: 'app-add-todo',
	templateUrl: './add-todo.component.html',
	styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
	message = '';
	text: string = '';
	addTodoForm = new FormGroup({
		textarea: new FormControl('', Validators.minLength(5)),
	})

	constructor(private todoService: TodoService) { }

	ngOnInit(): void {

	}

	addTodo() {
		this.text = this.addTodoForm.value.textarea;
		if (this.text === '') {
			this.message = `Please, type some text for adding todo.`
		} else {
			if (this.todoService.addTodo(this.text)) {
				this.message = `Todo "${this.text}" successfully added!`;
			} else {
				this.message = `Todo "${this.text}" already exist!`;
			}
			this.addTodoForm.reset();
		}
	}
}
