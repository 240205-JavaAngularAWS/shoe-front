import { Seller } from "./seller";

export interface Products {
    id ?: number;
    productName?: string;
    price: number;
    color: any;
    gender: any;
    category: any;
    quantity: number;
    seller: Seller;
    reviews?: {};
    orders?: {};
    imageUrl: string;
    description?: string;
}