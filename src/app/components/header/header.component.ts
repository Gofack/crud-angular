import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	todos: Todo[] = [];
	route = this.router.url;
	@Output() clearEvent = new EventEmitter();

	constructor(private todoService: TodoService, private router: Router) { }

	ngOnInit(): void {
	}

	clearList() {
		this.todoService.clearTodos();
		this.clearEvent.emit(this.todos);
	}

}
