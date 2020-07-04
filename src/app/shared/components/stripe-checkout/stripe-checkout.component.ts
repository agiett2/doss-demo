import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import {
    StripeService,
    Elements, Element as StripeElement, ElementsOptions, StripeCardComponent, ElementOptions
} from 'ngx-stripe';
import { PaymentService } from 'src/app/core/services/payment.service';
import { VirtualTimeScheduler } from 'rxjs';


@Component({
    selector: 'app-stripe-checkout',
    templateUrl: './stripe-checkout.component.html',
    styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {
    @Input() price: number;
    @Input() email?: string;
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
            phone: [''],
            street: ['', Validators.required],
            unit: [''],
            city: ['', Validators.required],
            state: ['', Validators.required],
            zip: ['', Validators.required]

        });
    }

    public get sf(): { [key: string]: AbstractControl } {
        return this.stripeForm.controls;
      }

    buy() {
        this.isPaymentProcessing = true;
        let token: string;
        const price = this.price;
        const email = this.email;
        console.log(this.card.getCard())
        const name = this.stripeForm.get('name').value;
        this.stripeService
            .createToken(this.card.getCard(), { name })
            .subscribe(result => {
                if (result.token) {
                    console.log('this is the result')
                    console.log(result.token.id)
                    token = result.token.id;
                    this.paymentService.create({ token, price, email }).subscribe((sucess) => {
                        console.log('sucess')
                        console.log(sucess);
                        this.isPaymentProcessing = false;
                    },
                        (error) => {
                            console.log(`error`)
                            console.log(error)
                            this.isPaymentProcessing = false;
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
