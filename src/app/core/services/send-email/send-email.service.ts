import { Injectable } from '@angular/core';
import { SendEmailServiceAbstract } from '../abstract/send-email.service.abstract';

@Injectable()
export class SendEmailService implements SendEmailServiceAbstract {
    constructor() { }
    public sendEmail(): void {
    
    //     sendmail({
    //         silent: true,
    //         dkim: {
    //           privateKey: fs.readFileSync('./dkim-private.pem', 'utf8'),
    //           keySelector: 'mydomainkey'
    //         },
    //         from: 'renzo@geex.company',
    //         to: 'development@geex.company',
    //         subject: 'test email',
    //         html: '<h1>Hello</h1><br/><h2>World!!</h2>'
    //     },  (err, reply) => {
    //         console.log(err && err.stack);
    //         console.dir(reply);
    //     });
    // }
    }
}

