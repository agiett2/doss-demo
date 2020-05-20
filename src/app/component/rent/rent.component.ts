import { Component, OnInit } from '@angular/core';
import { RentStepsComponent } from './rent-steps/rent-steps.component';
import { RentContentComponent } from './rent-content/rent-content.component';
import { LandlordFaqComponent } from '../landlord/landlord-faq/landlord-faq.component';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.scss']
})
export class RentComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public component: any;
  public newSpaceHeading: string;
  public newSpaceText: string;
  public  leasingHeading: string;
  public leasingText: string;
  constructor() { }

  ngOnInit(): void {
    this.component = RentContentComponent;
    this.heading = 'LIVE ANYWHERE, one year at a time…';
    this.subHeading = 'FAST. FLEXIBLE. FUN.';
    this.newSpaceHeading = 'Do you want a new space?';
    this.newSpaceText = `Today, more and more people are deciding to have a flexible
    lifestyle that empowers them to change their environment one year at a time. We have experienced TECH Agents
    that are ready to enhance your lifestyle!`;
    this.leasingHeading = 'Want help leasing your place?';
    this.leasingText = `Leasing a property and getting the perfect tenant is both an ART and a SCIENCE. Our TECH Agents and MEDIA Team
    can give your property the exposure needed to select the right tenant every time!`;
  }
  public showComponent = (component: string): void => {
    switch (component) {
      case 'faq':
        this.component = LandlordFaqComponent;
        break;
      case 'steps':
        this.component = RentStepsComponent;
        break;
      case 'content':
        this.component = RentContentComponent;
        break;
      default:
        this.component = RentContentComponent;
    }
  }
}
