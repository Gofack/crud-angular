import { Todo } from "./interfaces/todo";

export class Init {
	load() {
		if (localStorage.getItem('todos') === null || localStorage.getItem('todos') == undefined) {
			console.log('No Todos Found... Creating...');
			let todos: Todo[] = [
				{
					text: 'Running'
				},
				{
					text: 'Breakfast'
				},
				{
					text: 'Daily call'
				}
			];

			localStorage.setItem('todos', JSON.stringify(todos));
			return
		} else {
			console.log('Found Todos...');
		}
	}
}