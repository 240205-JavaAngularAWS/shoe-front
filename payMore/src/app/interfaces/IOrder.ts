import { IOrderItem } from "./IOrderItem";



export interface IOrder {
    priceTotal: number,
    time: string,
    orderItems: IOrderItem[]
}
