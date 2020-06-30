import { Injectable } from '@angular/core';
import { SendEmailServiceAbstract } from '../abstract/send-email.service.abstract';
import { NgForm, FormGroup } from '@angular/forms';
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';

@Injectable()
export class SendEmailService implements SendEmailServiceAbstract {
    constructor(private http: HttpClient) { }
    public sendEmail(contactForm: FormGroup) {
        console.log(contactForm);
        if (contactForm.valid) {
            const user = contactForm.value;
            const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
            this.http.post('https://formspree.io/asdlf7asdf',
                { name: `${user.firstName} ${user.lastName}`, replyto: user.email, message: user.messages },
                { headers }).subscribe(
                    response => {
                        console.log(response);
                    }
                );
        }
    }
}

