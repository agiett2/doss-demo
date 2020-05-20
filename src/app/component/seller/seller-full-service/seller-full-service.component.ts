import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-seller-full-service',
  templateUrl: './seller-full-service.component.html',
  styleUrls: ['./seller-full-service.component.scss'],
})
export class SellerFullServiceComponent implements OnInit {
  public heading: string;
  public subheading: string;
  public whatYouGetList: string[];
  public marketingListOne: string[];
  public marketingListTwo: string[];
  public responsibilities: string[];
  public fullServiceForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    (this.heading = 'FULL SERVICE, at a FAIR PRICE!'),
      (this.subheading = 'Data Driven Service. Superior Marketing. Flat Fee.');
    this.whatYouGetList = [
      'Full Service, plus more...',
      'Property listed on Realtor.com, Zillow, etc…',
      'Advertising/Media Marketing Experts',
      'A Dedicated TEAM!',
    ];

    this.responsibilities = [
      'Declutter your home...',
      'Keep your house showcase ready...',
      'Imporve the curb appeak of your property',
      'Set a competitive price to get your hoime SOLD....',
      'Expect great service from DOSS!',
    ];
    this.marketingListOne = [
      'Open Houses',
      'Supra Lockbox',
      'Pricing Support',
      'Concierge Services',
      'Professional Pictures',
      'Matterport 3D Tour',
      'Attend all Inspections',
      'Effective Communication',
      'Property Prep. Consulting',
    ];

    this.marketingListTwo = [
      'Staff Real Estate Attorney',
      'Professional/Smart Signage',
      'Automated & Systematic Process',
      'Call Management/Scheduled Tours',
      '50 Professional Property Booklets',
      'Social Media Digital Marketing Flyers',
      'Contract Negotiation/Contract Support',
      'Assist w/Buying New Property(if App)',
      'Listing placed on MLS, Realtor.com',
    ];
  }
}
