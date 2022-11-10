import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
	declarations: [
		AppComponent,
		TodosComponent,
		AddTodoComponent,
		EditTodoComponent,
		HeaderComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
