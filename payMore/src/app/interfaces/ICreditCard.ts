
import { IExtendedAddress } from "./IExtendedAddress";
import { IRegisterUser } from "./IRegisterUser";

export interface ICreditCard {

    cardNumber: string,
    securityCode: string,
    firstName: string,
    lastName: string,
    expirationDate: string,
    address: IExtendedAddress,
    user: IRegisterUser
    






}



   