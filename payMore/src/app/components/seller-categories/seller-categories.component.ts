import { Component } from '@angular/core';
import { ITodo } from '../../interfaces/ITodo';
@Component({
  selector: 'seller-categories',
  templateUrl: './seller-categories.component.html',
  styleUrl: './seller-categories.component.css',
})
export class SellerCategoriesComponent {
  // Things to note: This is a class and has associated lifecycle hooks that we can connect to
  // We can define fields and functions inside of here just as we would in normal TS/JS
  // The additional lifecycle methods will be explored next week (constructor, ngOnInit)

  todos: ITodo[] = [
    {
      id: 1,
      text: 'Do the dishes',
      completed: true,
    },
    {
      id: 2,
      text: 'Take out the trash',
      completed: false,
    },
    {
      id: 3,
      text: 'Pack for trip',
      completed: false,
    },
    {
      id: 4,
      text: 'Make dinner',
      completed: false,
    },
  ];

  counter: number = 5;
  newTodoText: string = '';
  hide: boolean = true;

  createNewTodo() {
    // console.log("clicked!")
    // Goal -> Extract value of newTodoText and create a todo for it
    // console.log(this.newTodoText)
    // We'll check to see if the todo entry has a length greater than zero, if so we can add it, otherwise we'll display an error message
    if (!this.newTodoText) {
      // console.log("Text is blank")
      // TODO add in error message
      this.hide = false;
      return;
    }
    // Now we're at the part where we try to create the new todo
    let newTodo: ITodo = {
      id: 0,
      text: this.newTodoText,
      completed: false,
    };
    this.todos.push(newTodo);

    this.newTodoText = '';
    this.hide = true;
  }
}
