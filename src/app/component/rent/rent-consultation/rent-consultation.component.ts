import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';

@Component({
  selector: 'app-rent-consultation',
  templateUrl: './rent-consultation.component.html',
  styleUrls: ['./rent-consultation.component.scss']
})
export class RentConsultationComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public ltForm: FormGroup;
  public isSubmittingEmail: boolean;
  public responseMsg: string;

  constructor(private fb: FormBuilder, private emailService: SendEmailServiceAbstract) { }

  ngOnInit(): void {
    this.isSubmittingEmail = false;
    window.scroll(0, 0);
    this.heading = `Schedule a Landlord/Tenant Consultation, TODAY!`;
    this.subHeading = `NOTE: Leave blank all questions that are not applicable`;
    this.ltForm = this.fb.group({
      landLordTenant: ['', Validators.required],
      coLandLordTenant: [''],
      landlordTenantEmail: ['', [Validators.required, Validators.email]],
      coLandlordTenantEmail: ['', Validators.email],
      landlordTeantPhoneNumber: ['', Validators.required],
      coLandLoardTenantPhoneNumber: [''],
      landLordlookingToLease: ['', Validators.required],
      rentedProperty: ['', Validators.required],
      rentedPropertyPrice: [''],
      mlsProposal: ['', Validators.required],
      tenatOnProperty: ['', Validators.required],
      whenTeneatLeaseExpire: [''],
      isUsingPMC: ['', Validators.required],
      isInterestedInSomeOneManaging: ['', Validators.required],
      tenatLookingToLease: ['', Validators.required],
      monthlyBudget: ['', Validators.required],
      areaToLive: ['', Validators.required],
      howManyParkingSpots: [''],
      havePets: ['', Validators.required],
      kindOfPets: [''],
      haveBrokenLease: ['', Validators.required]
    });
  }

  public get f(): any {
    return this.ltForm.controls;
  }

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService.sendEmail(this.buildEmailOptions(form)).subscribe((response: { error?: any, success?: any}) => {
      this.isSubmittingEmail = false;
      response.success ? this.responseMsg = 'Email Sent!' : this.responseMsg = 'Error: Unable to send email at this time.';
    }, (error) => {
      this.isSubmittingEmail = false;
      this.responseMsg = 'Error: Unable to send email at this time.';
    });

    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);
  }

  private buildEmailOptions(form: FormGroup): EmailOptionsPayloadInterface {
    return {
      to: 'agiet_doss@askdoss.com',
      from: 'noreply@askdoss.com',
      subject: `Rent / Landlord Conslation Form for ${form.controls.landLordTenant.value}`,
      html: `<p>Landlord Tenant: ${form.controls.landLordTenant.value}</p>
      <p>Co Landlord Tenant: ${form.controls.coLandLordTenant.value}</p>
      <p>Land lord Tenant Email: ${form.controls.landlordTenantEmail.value}</p>
      <p>Co Land lord Tenant Email: ${form.controls.coLandlordTenantEmail.value}</p>
      <p>Land lord Teant Phone Number: ${form.controls.landlordTeantPhoneNumber.value}</p>
      <p>Co Land Loard Tenant PhoneNumber: ${form.controls.coLandLoardTenantPhoneNumber.value}</p>
      <p>Land Lord looking To Lease: ${form.controls.landLordlookingToLease.value}</p>
      <p>Rented Property: ${form.controls.rentedProperty.value}</p>
      <p>Rented Property Price: ${form.controls.rentedPropertyPrice.value}</p>
      <p>Mls Proposal: ${form.controls.mlsProposal.value}</p>
      <p>Tenat On Property: ${form.controls.tenatOnProperty.value}</p>
      <p>When Teneat Lease Expire: ${form.controls.whenTeneatLeaseExpire.value}</p>
      <p>Is Using PMC: ${form.controls.isUsingPMC.value}</p>
      <p>Is Interested In Someone Managing: ${form.controls.isInterestedInSomeOneManaging.value}</p>
      <p>Tenat Looking To Lease: ${form.controls.tenatLookingToLease.value}</p>
      <p>Monthly Budget: ${form.controls.monthlyBudget.value}</p>
      <p>Area To Live: ${form.controls.areaToLive.value}</p>
      <p>How Many Parking Spots: ${form.controls.howManyParkingSpots.value}</p>
      <p>Have Pets: ${form.controls.havePets.value}</p>
      <p>Kind Of Pets: ${form.controls.kindOfPets.value}</p>
      <p>Have Broken Lease: ${form.controls.haveBrokenLease.value}</p>`
    };
  }
}
