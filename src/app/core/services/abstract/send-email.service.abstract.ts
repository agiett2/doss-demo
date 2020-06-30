import { FormGroup } from '@angular/forms';

export abstract class SendEmailServiceAbstract {
    public abstract sendEmail = (form: FormGroup): void => {};
}
