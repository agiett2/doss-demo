import { Injectable } from '@angular/core';
import { SendEmailServiceAbstract } from '../abstract/send-email.service.abstract';
import { NgForm, FormGroup } from '@angular/forms';
import '../../../../assets/js/smtp.js';
declare let Email: any;
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
} from '@angular/common/http';
import { EmailOptionsPayloadInterface } from '../../model/email-options.payload.interface';

@Injectable()
export class SendEmailService implements SendEmailServiceAbstract {
    constructor(private http: HttpClient) { }
    public sendEmail(mailOptions: EmailOptionsPayloadInterface) {
        // return this.http.post('https://askdoss.com/api/sdoss', mailOptions);
       return  Email.send({
            Host: 'smtp.gmail.com',
            Username : 'noreplydoss@gmail.com',
            Password : 'ThanosMail8523',
            To : mailOptions.to,
            From : mailOptions.from,
            Subject : mailOptions.subject,
            Body : mailOptions.html
            });
    }
}

