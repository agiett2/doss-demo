import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StripeService } from 'ngx-stripe';
import { CreateChargePayloadInterface } from '../model/create-charge.payload.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private stripe: StripeService) { }

  public createCharge(charge: CreateChargePayloadInterface)  {
    return this.http.post('http://askdoss.com/api/createCharge', charge);

    // this.http.post('http://localhost:3000/order', order).subscribe((res) => {
    //   console.log(res)
    // });

  }
}
