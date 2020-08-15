import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  StripeService,
  Elements,
  Element as StripeElement,
  ElementsOptions,
  StripeCardComponent,
  ElementOptions,
} from 'ngx-stripe';
import { CreateChargePayloadInterface } from 'src/app/core/model/create-charge.payload.interface';
import { TableDataRowInterface } from '../../interfaces/tableDataRow.interface';
import { StripePaymentServiceAbstract } from 'src/app/core/services/abstract/stripe-payment.service.abstract';
import { StateInterface } from '../../interfaces/state.interface';
import { StateServiceAbstract } from 'src/app/core/services/abstract/state.service.abstract';
import { ConfirmPaymentModalComponent } from 'src/app/core/components/modal/confirm-payment-modal.component';
import { Subscription } from 'rxjs';
import { BillingDetailsPayloadInterface } from 'src/app/core/model/billing-details.payload.interface';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss'],
})
export class StripeCheckoutComponent implements OnInit {
  @Input() selectedServices: TableDataRowInterface[];
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  public paymentModalSubscription: Subscription;
  public isPaymentProcessing = false;
  public isPaymentComplet: boolean;
  @Input() price: number;
  public paymentMes: string;
  public cardOptions: ElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        lineHeight: '40px',
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '2rem',
        '::placeholder': {
          color: '#31325F',
        },
      },
    },
  };
  public states: StateInterface[];

  elementsOptions: ElementsOptions = {
    locale: 'en',
  };
  stripeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paymentService: StripePaymentServiceAbstract,
    private stateService: StateServiceAbstract
  ) {}

  ngOnInit() {
    this.states = this.stateService.getStates();
    this.stripeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      phone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          ),
        ]),
      ],
      street: ['', Validators.required],
      unit: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      listingSameAsBilling: ['', Validators.required],
    });
  }

  public get sf(): { [key: string]: AbstractControl } {
    return this.stripeForm.controls;
  }

  public buy() {
    console.log(this.card.getCard());
    const name = this.stripeForm.get('name').value;
    const totalPrice = this.getTotal(this.selectedServices);
    const billingDetails: BillingDetailsPayloadInterface = {
      address: {
        city: this.stripeForm.controls.city.value,
        line1: this.stripeForm.controls.street.value,
        line2: this.stripeForm.controls.unit.value,
        state: this.stripeForm.controls.state.value,
        zip: this.stripeForm.controls.zip.value,
      },
      email: this.stripeForm.controls.email.value,
      phone: this.stripeForm.controls.phone.value,
    };
    this.paymentService.confirmPayment(totalPrice, this.selectedServices, name, this.card, billingDetails );
  }

  public getTotal(selectedMenus: TableDataRowInterface[]): number {
    let price = 0;

    selectedMenus.forEach((data: TableDataRowInterface) => {
      price = price + data.price;
    });
    return price;
  }
}
