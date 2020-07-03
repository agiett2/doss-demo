import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
 
import { StripeService, Elements, Element as StripeElement, ElementsOptions } from "ngx-stripe";


@Component({
    selector: 'app-stripe-checkout',
    templateUrl: './stripe-checkout.component.html',
    styleUrls: ['./stripe-checkout.component.scss']
})
export class StripeCheckoutComponent implements OnInit {
    elements: Elements;
    card: StripeElement;

    // optional parameters
    elementsOptions: ElementsOptions = {
        locale: 'es'
    };

    stripeTest: FormGroup;

    constructor(
        private fb: FormBuilder,
        private stripeService: StripeService) { }

    ngOnInit() {
        this.stripeTest = this.fb.group({
            name: ['', [Validators.required]]
        });
        this.stripeService.elements(this.elementsOptions)
            .subscribe(elements => {
                this.elements = elements;
                // Only mount the element the first time
                if (!this.card) {
                    this.card = this.elements.create('card', {
                        style: {
                            base: {
                                iconColor: '#666EE8',
                                color: '#31325F',
                                lineHeight: '40px',
                                fontWeight: 300,
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                fontSize: '18px',
                                '::placeholder': {
                                    color: '#CFD7E0'
                                }
                            }
                        }
                    });
                    this.card.mount('#card-element');
                }
            });
    }

    buy() {
        const name = this.stripeTest.get('name').value;
        this.stripeService
            .createToken(this.card, { name })
            .subscribe(result => {
                if (result.token) {
                    // Use the token to create a charge or a customer
                    // https://stripe.com/docs/charges
                    console.log(result.token);
                } else if (result.error) {
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
