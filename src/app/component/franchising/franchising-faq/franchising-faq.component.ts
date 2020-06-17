import { Component, OnInit } from '@angular/core';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';

@Component({
  selector: 'app-franchising-faq',
  templateUrl: './franchising-faq.component.html',
  styleUrls: ['./franchising-faq.component.scss']
})
export class FranchisingFaqComponent implements OnInit {
  public heading = 'Franchise FAQ';
  public faqList: FaqInterface[];
  constructor() {}

  ngOnInit(): void {
    this.faqList = [
      {
        question: 'When will DOSS begin selling Franchises?',
        answer: 'DOSS will begin selling Franchises by the 3rd QTR 2021'
      },
      {
        question: 'How much will a DOSS Home Center Franchise Cost?',
        answer: 'Depending on the population size, the cost will be either $10,000 or $15,000.'
      },
      {
        question: 'Will the Market Areas be exclusive territories? ',
        answer: 'Yes! The Market Areas will be exclusive.'
      },
      {
        question: 'Can I reserve a Market Area now?',
        // tslint:disable-next-line:max-line-length
        answer: `Yes! After you submit the short form application, someone from DOSS will be in touch with you to discuss the opportunity further. If approved, you can reserve your Market Area for $5,000 for smaller markets and $7,500 for large markets.`
      },
      {
        question: 'Does the Franchise Fee include DOSS Social Agents?',
        answer: 'Yes! DOSS Social Agents is included in the Franchising Fee..'
      },
      {
        question: 'When will the Ask DOSS search and transaction portal launch?',
        answer: 'Our Voice-Activated Intelligent Assistant built into a proprietary real estate search portal will launch by Fall 2020. '
      },
      {
        question: 'Will my DOSS Home Center get all the leads for my Market Area?',
        answer: 'Yes! Each DOSS Home Center will exclusively receive all the leads for their Market Area.'
      },
      {
        question: 'Will I have to pay anything for the leads from the Ask DOSS website?',
        // tslint:disable-next-line:max-line-length
        answer: 'Yes! The DOSS Home Center’s will receive exclusive leads in exchange for a referral fee paid at closing. The referral fee(s) structure is outlined in our Franchise Agreement.'
      },
      {
        question: 'Will I be required to open an office?',
        // tslint:disable-next-line:max-line-length
        answer: 'Yes! Each Franchisee will have twelve(12) months to open their DOSS Home Center in a retail store front office.  Locations must be approved by Corporate.'
      },
      {
        question: 'Will there be any annual conferences for DOSS Agents and Franchisees to attend?',
        // tslint:disable-next-line:max-line-length
        answer: 'Yes! Starting January 2021, DOSS will be hosting our first annual DOSS DOMINATE Conference for the entire DOSS brand(DOSS Pros, DOSS Social Agents, etc… ) at the San Luis Resort in Galveston, Texas.'
      },
    ];
  }
}
