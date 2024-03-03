import { Injectable } from '@angular/core';
import { IList } from '../interfaces/IList';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SellerProductsService {
  // This will pull all the todos associated with a user in time but for now we'll create an array of our todo lists and their associated todos

  lists: IList[] = [
    {
      id: 1,
      title: 'Grocery List',
      owner: {
        username: 'eric',
        password: 'password',
      },
      todos: [
        {
          id: 1,
          text: 'Milk',
          completed: false,
        },
        {
          id: 2,
          text: 'Cheese',
          completed: false,
        },
        {
          id: 3,
          text: 'Paper Towels',
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Chores List',
      owner: {
        username: 'test',
        password: 'password',
      },
      todos: [
        {
          id: 4,
          text: 'Do the dishes',
          completed: true,
        },
        {
          id: 5,
          text: 'Take out the trash',
          completed: false,
        },
        {
          id: 6,
          text: 'Pack for trip',
          completed: false,
        },
        {
          id: 7,
          text: 'Make dinner',
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Chores List',
      owner: {
        username: 'user1',
        password: 'password',
      },
      todos: [
        {
          id: 8,
          text: 'Do the dishes',
          completed: true,
        },
        {
          id: 9,
          text: 'Make dinner',
          completed: false,
        },
      ],
    },
  ];

  getListsByUser() {
    // The user should be logged in, I'm just gonna pull their username from sessionstorage and use it here
    let username: string | null = sessionStorage.getItem('username');

    let usernameForReal: string;
    if (username) {
      usernameForReal = username;
    } else {
      usernameForReal = '';
    }

  }
  constructor(private authService: AuthService) {}
}
