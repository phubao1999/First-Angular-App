import { Todo } from '../interfaces/todo';
import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  animations: [
    trigger('fade', [

      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate(500, style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),

      transition(':leave', [
        animate(500, style({ opacity: 0, transform: 'translateY(30px)' }))
      ]),
    ])
  ]
})
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditCache: string;
  filter: string;
  constructor() { }

  ngOnInit() {
    this.filter = 'all';
    this.beforeEditCache = '';
    this.idForTodo = 4;
    this.todoTitle = ''; // NgModel 2 Way Binding Here
    this.todos = [
      {
        id: 1,
        title: 'Go To Play Soccer',
        completed: false,
        editing: false,
      },
      {
        id: 2,
        title: 'Learn Angular',
        completed: false,
        editing: false,
      },
      {
        id: 3,
        title: 'Learn Nodejs',
        completed: false,
        editing: false,
      },
    ];
  }
  addTodo(): void {   // Fuction That Add New Item
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push({    // Save Data
      id: this.idForTodo,
      title: this.todoTitle,
      completed: false,
      editing: false
    });
    // Clear Field
    this.todoTitle = '';
    this.idForTodo++;
  }
  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;   // Edit ToDo List, Using Npm Angular-autofocus-fix
    todo.editing = true;
  }
  doneEdit(todo: Todo): void {  // Save New Item After Edit
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  cancelEdit(todo: Todo): void {   // Exit Form Edit Function
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }
  deleteTodo(id: number): void {  // function That Delete Item
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  remaining(): number {   // Count Item Haven't Been Done
    return this.todos.filter(todo => !todo.completed).length;
  }
  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }
  clearCompleted(): void {  // Clear All Item Have Been Done
    this.todos = this.todos.filter(todo => !todo.completed);
  }
  checkAllTodos(): void {   // Make All Item Have been Done
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked);
  }
  todosFiltered(): Todo[] {   // Filter Item
    if (this.filter === 'all') {
      return this.todos;
    } else if (this.filter === 'active') {
      return this.todos.filter(todo => !todo.completed);
    } else if (this.filter === 'completed') {
      return this.todos.filter(todo => todo.completed);
    }
    return this.todos;
  }
}
