import { Component, OnInit, ViewChild, Input, OnDestroy } from '@angular/core';
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
import { ModalServiceAbstract } from 'src/app/core/services/abstract/modal.service.abstract';
import { ConfirmPaymentModalComponent } from 'src/app/core/components/modal/confirm-payment-modal.component';
import { Subscription } from 'rxjs';
import { BillingDetailsPayloadInterface } from 'src/app/core/model/billing-details.payload.interface';

@Component({
  selector: 'app-stripe-checkout',
  templateUrl: './stripe-checkout.component.html',
  styleUrls: ['./stripe-checkout.component.scss'],
})
export class StripeCheckoutComponent implements OnInit, OnDestroy {
  @Input() selectedServices: TableDataRowInterface[];
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
  public paymentModalSubscription: Subscription;
  public isPaymentProcessing = false;
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
    private stripeService: StripeService,
    private paymentService: StripePaymentServiceAbstract,
    private stateService: StateServiceAbstract,
    private dialog: MatDialog
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
    this.paymentModalSubscription = this.paymentService
      .confirmPayment(totalPrice, this.selectedServices)
      .componentInstance.submitClicked.subscribe((isConfirmed: boolean) => {
        if (isConfirmed) {
          this.paymentService.createToken(
            totalPrice,
            this.card.getCard(),
            this.selectedServices,
            name,
            billingDetails
          ).subscribe((response: any) => {
            const tokenId = response.token.id;
            const payload: CreateChargePayloadInterface = {
              token: tokenId,
              price: this.getTotal(this.selectedServices),
              billing_details: {
                address: {
                  city: this.stripeForm.controls.city.value,
                  line1: this.stripeForm.controls.street.value,
                  line2: this.stripeForm.controls.unit.value,
                  state: this.stripeForm.controls.state.value,
                  zip: this.stripeForm.controls.zip.value,
                },
                email: this.stripeForm.controls.email.value,
                phone: this.stripeForm.controls.phone.value,
              },
            };
          });
        } else {
          this.dialog.closeAll();
        }
      });
  }
  public getTotal(selectedMenus: TableDataRowInterface[]): number {
    let price = 0;

    selectedMenus.forEach((data: TableDataRowInterface) => {
      price = price + data.price;
    });
    return price;
  }

  public openConfirmPaymentModal(
    text: string,
    services: TableDataRowInterface[]
  ): MatDialogRef<ConfirmPaymentModalComponent> {
    const dialogRef = this.dialog.open(ConfirmPaymentModalComponent, {
      closeOnNavigation: false,
      width: '100%',
      data: { dialogText: text, dialogServices: services },
      disableClose: true,
      autoFocus: true,
    });
    return dialogRef;
  }
  public purchaseServices(): void {
    this.stripeService
    .createToken(this.card.getCard(), { name })
    .subscribe((result) => {
      if (result.token) {
        console.log(result.token.id);
        const token = result.token.id;
        const payload: CreateChargePayloadInterface = {
          token: result.token.id,
          price: this.getTotal(this.selectedServices),
          billing_details: {
            address: {
              city: this.stripeForm.controls.city.value,
              line1: this.stripeForm.controls.street.value,
              line2: this.stripeForm.controls.unit.value,
              state: this.stripeForm.controls.state.value,
              zip: this.stripeForm.controls.zip.value,
            },
            email: this.stripeForm.controls.email.value,
            phone: this.stripeForm.controls.phone.value,
          },
        };
        this.paymentService.createCharge(payload).subscribe(
          (response: any) => {
            console.log('sucess');
            console.log(response);
            const message: string = response.outcome.seller_message;
            setTimeout(() => {
              this.isPaymentProcessing = false;
            }, 6000);
          },
          (error) => {
            setTimeout(() => {
              this.isPaymentProcessing = false;
            }, 6000);
          }
        );

        // Use the token to create a charge or a customer
        // https://stripe.com/docs/charges
      } else if (result.error) {
        this.isPaymentProcessing = false;
        // Error creating the token
        console.log(result.error.message);
      }
    });
  }
  public ngOnDestroy(): void {
    this.paymentModalSubscription.unsubscribe();
  }
}
