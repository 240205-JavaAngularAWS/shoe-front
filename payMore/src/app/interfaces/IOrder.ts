import { IOrderItem } from "./IOrderItem";



export interface IOrder {
    orderId: number,
    priceTotal: number,
    time: string,
    orderItems: IOrderItem[]
}
