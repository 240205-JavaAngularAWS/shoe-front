import { Products } from "./products";

export interface Seller {
    id ?: number;
    companyName?: string;
    email?: string;
    username?: string;
    password?: string;
    products?: Products;
}
