import { BillingDetailsPayloadInterface } from './billing-details.payload.interface';

export interface CreateChargePayloadInterface {
    readonly token: string;
    readonly price: number;
    readonly billing_details: BillingDetailsPayloadInterface;
}
