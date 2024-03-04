import { Products } from './products';
import { Seller } from './seller';

export interface sellerList {
  id?: number;
  title: string;
  owner: Seller;
  products: Products[];
}
