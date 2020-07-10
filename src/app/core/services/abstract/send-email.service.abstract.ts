import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmailOptionsPayloadInterface } from '../../model/email-options.payload.interface';

export abstract class SendEmailServiceAbstract {
    public abstract sendEmail(form: EmailOptionsPayloadInterface): Promise<any>;
}
