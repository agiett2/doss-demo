import { AddressPayloadInterface } from './address.payload.interface';

export interface BillingDetailsPayloadInterface {
    readonly address: AddressPayloadInterface;
    readonly email: string;
    readonly phone: string;
}
