import { ITodo } from './ITodo';
import { SUser } from './SUser';

export interface IList {
  id?: number;
  title: string;
  owner: SUser;
  todos: ITodo[];
}
