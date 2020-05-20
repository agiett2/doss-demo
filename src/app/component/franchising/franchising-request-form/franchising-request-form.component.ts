import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';

@Component({
    selector: 'app-franchising-request-form',
    templateUrl: './franchising-request-form.component.html',
    styleUrls: ['./franchising-request-form.component.scss']
})
export class FranchisingRequestFormComponent implements OnInit {
    public requestFrom: FormGroup;
    constructor(private fb: FormBuilder, private sendEmailService: SendEmailServiceAbstract) { }

    public ngOnInit(): void {
        this.requestFrom = this.fb.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            bestNumber: ['', Validators.required],
            email: ['', Validators.required],
            cityStateInterest: ['', Validators.required],
            marketAreaInterest: ['', Validators.required],
            backgroundExperience: [''],
            dossUpdates: [true],
        });
        console.log(this.rf.firstName.errors)
     }

     public submitForm(form: FormGroup): void {
        //  this.sendEmailService.sendEmail();
     }

     public get rf(): {[key: string]: AbstractControl} {
         return this.requestFrom.controls;
     }
}
