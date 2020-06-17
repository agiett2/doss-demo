import { Component, OnInit } from '@angular/core';
import { SuccessStepsInterface } from 'src/app/shared/interfaces/success-steps.interface';

@Component({
  selector: 'app-landlord',
  templateUrl: './landlord.component.html',
  styleUrls: ['./landlord.component.scss']
})
export class LandlordComponent implements OnInit {
  public steps: SuccessStepsInterface[];
  public heading: string;
  constructor() { }

  ngOnInit(): void {
    this.heading = 'The Steps to finding the right Tenant';
    // tslint:disable-next-line: max-line-length
    this.steps = [{ step: 'Landlord Consultation', detail: 'At DOSS, to ensure that we really understand your goals and objectives, we do a Landlord Consultation to learn more about you and to discuss how we plan to give you an awesome experience.' },
    // tslint:disable-next-line: max-line-length
    { step: 'Complete Paperwork', detail: 'Once you decide to retain us(DOSS) to represent you, we will complete the necessary paperwork to start the process. At this stage, you and your TECH Agent decide the amount and date to list your property for on the MLS.' },
    // tslint:disable-next-line: max-line-length
    { step: 'DOSS Media Experts', detail: 'DOSS has an in-house Media Company that will take professional pictures, etc… to capture and showcase the best features of your property.' },
    // tslint:disable-next-line: max-line-length
    { step: 'Go LIVE', detail: 'Statistically, the best day to list a property on the MLS is Thursdays. If possible, we will list your property the first Thursday after our Media Department has all of your marketing materials prepared. Your property will be listed on the MLS, Realtor.com, Truila, Zillow, etc… The objective is to present to you every application so you can choose the best tenant for your property.' },
    // tslint:disable-next-line: max-line-length
    { step: 'Tenant Moves-In', detail: `With all of the applications you received, we help you select the BEST tenant for you and your property. Let's call them and let them know that they were approved, set the date, and let them move in!` },
    ];
  }

}
