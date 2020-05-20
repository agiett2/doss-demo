import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-rent-consultation',
  templateUrl: './rent-consultation.component.html',
  styleUrls: ['./rent-consultation.component.scss']
})
export class RentConsultationComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public ltForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
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
      howManyParkingSpots: ['', Validators.required],
      havePets: ['', Validators.required],
      kindOfPets: [''],
      haveBrokenLease: ['', Validators.required]
    });
  }

  public get f(): any {
    return this.ltForm.controls;
  }

  public submitForm(form: FormGroup): void {
    console.log(form.getRawValue());
  }
}
