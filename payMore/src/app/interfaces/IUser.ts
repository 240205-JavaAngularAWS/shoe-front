import { ICreditCard } from "./ICreditCard"
import { IExtendedAddress } from "./IExtendedAddress"
import { IOrder } from "./IOrder"

export interface IUser {

        id: number,
        firstName: string,
        lastName: string,
        email: string,
        username: string,
        addresses: IExtendedAddress[],
        creditCards: ICreditCard[],
        orders: IOrder[]
    }



