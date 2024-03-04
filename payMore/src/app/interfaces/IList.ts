import { Products } from './products';
import { Seller } from './seller';

export interface IList {
  id?: number;
  title: string;
  owner: Seller;
  products: Products[];
}
