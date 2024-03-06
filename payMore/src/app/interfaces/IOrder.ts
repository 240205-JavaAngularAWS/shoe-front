import { IOrderItem } from "./IOrderItem";



export interface IOrder {
    id?: number,
    priceTotal?: number,
    status?: string,
    timestamp?: string,
    orderItems: IOrderItem[]
    userId?: number
}
