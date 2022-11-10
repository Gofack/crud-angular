import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
	{ path: '', component: TodosComponent },
	{ path: 'addTodo', component: AddTodoComponent },
	{ path: 'editTodo/:todoId', component: EditTodoComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
