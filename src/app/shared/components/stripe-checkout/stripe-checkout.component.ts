import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import {
    StripeService,
    Elements, Element as StripeElement, ElementsOptions, StripeCardComponent, ElementOptions
} from 'ngx-stripe';
import { PaymentService } from 'src/app/core/services/payment.service';
import { VirtualTimeScheduler } from 'rxjs';
import { CreateChargePayloadInterface } from 'src/app/core/model/create-charge.payload.interface';


@Component({
    selector: 'app-stripe-checkout',
    templateUrl: './stripe-checkout.component.html',
    styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {
    @Input() price: number;
    @ViewChild(StripeCardComponent) card: StripeCardComponent;
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
                    color: '#31325F'
                }
            }
        }
    };

    elementsOptions: ElementsOptions = {
        locale: 'en'
    };
    stripeForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private stripeService: StripeService,
        private paymentService: PaymentService) { }

    ngOnInit() {
        this.stripeForm = this.fb.group({
            name: ['', Validators.required],
            email: ['', Validators.compose([Validators.required, Validators.email])],
            phone: ['',
                Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
            street: ['', Validators.required],
            unit: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required]
        });

        console.log(this.sf)
    }

    public get sf(): { [key: string]: AbstractControl } {
        return this.stripeForm.controls;
    }

    buy() {
        this.isPaymentProcessing = true;
        console.log(this.card.getCard())
        const name = this.stripeForm.get('name').value;
        this.stripeService
            .createToken(this.card.getCard(), { name })
            .subscribe(result => {
                if (result.token) {
                    console.log(result.token.id)
                    const token = result.token.id;
                    const payload: CreateChargePayloadInterface = {
                        token: result.token.id,
                        price: this.price,
                        billing_details: {
                            address: {
                                city: this.stripeForm.controls.city.value,
                                line1: this.stripeForm.controls.street.value,
                                line2: this.stripeForm.controls.unit.value,
                                state: this.stripeForm.controls.state.value,
                                zip: this.stripeForm.controls.zip.value
                            },
                            email: this.stripeForm.controls.email.value,
                            phone: this.stripeForm.controls.phone.value
                        }
                    };
                    this.paymentService.createCharge(payload).subscribe((response: any) => {
                        console.log('sucess')
                        console.log(response);
                        const message: string = response.outcome.seller_message;
                        setTimeout(() => {
                            this.isPaymentProcessing = false;
                        }, 6000);

                    },
                        (error) => {
                            console.log(`error`)
                            console.log(error)
                            setTimeout(() => {
                                this.isPaymentProcessing = false;
                            }, 6000);
                        });

                    // Use the token to create a charge or a customer
                    // https://stripe.com/docs/charges

                } else if (result.error) {
                    this.isPaymentProcessing = false;
                    // Error creating the token
                    console.log(result.error.message);
                }
            });
    }

}
    // @Input() public amount: number;
    // @Input() public description: string;
    // @ViewChild('cardElement') cardElement: ElementRef;


    // public card: stripe.elements.Element;
    // public cardErrors: any;
    // public loading = false;
    // public confirmation: any;

    // public ngOnInit() {
    //     const elements = stripe.elements();

    //     this.card = elements.create('card');
    //     this.card.mount(this.cardElement.nativeElement);
    //     this.card.addEventListener('change', ({ error }) => {
    //         this.cardErrors = error && error.message;
    //     });
    // }

    // public async handleForm(e: Event) {
    //     e.preventDefault();
    //     const { source, error } = await this.stripe.createSource(this.card);
    //     if (error) {
    //         // Inform the user that there was an error
    //         this.cardErrors = error.message;
    //     } else {
    //         // Send the token to your server.
    //         // this.loading = true;
    //         // const user = await this.auth.getUser();
    //         // const fun = this.functions.httpsCallable('stripeCreateCharge');
    //         // this.confirmation = await fun({ source: source.id, uid: user.uid, amount: this.amount }).toPromise();
    //         // this.loading = false;
    //     }
    // }
