import { IOrderItem } from "./IOrderItem";



export interface IOrder {
    id: number,
    priceTotal: number,
    timestamp: string,
    orderItems: IOrderItem[]
}
