import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StripeService } from 'ngx-stripe';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient, private stripe: StripeService) { }

  public create(order: { token: string, price: number, email?: string})  {
    return this.http.post('http://localhost:3000/order', order);

    // this.http.post('http://localhost:3000/order', order).subscribe((res) => {
    //   console.log(res)
    // });

  }
}
