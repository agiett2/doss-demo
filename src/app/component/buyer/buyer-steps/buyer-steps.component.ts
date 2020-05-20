import { Component, OnInit } from '@angular/core';
import { StepsInterface } from 'src/app/shared/interfaces/steps.interface';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';

@Component({
  selector: 'app-buyer-steps',
  templateUrl: './buyer-steps.component.html',
  styleUrls: ['./buyer-steps.component.scss']
})
export class BuyerStepsComponent implements OnInit {
  public heading: string;
  public subHeadinig: string;
  public steps: StepsInterface[];

  constructor() {}

  ngOnInit(): void {
    this.heading = 'The Pathway to Homeownership…';
    this.subHeadinig = '10 Steps to ENSURE a smooth process';
    // tslint:disable-next-line: max-line-length
    this.steps = [
      {
        step: 'Buyer Consultation...',
        // tslint:disable-next-line:max-line-length
        detail: `At DOSS, to ensure that we really understand your goals and objectives, we do a Buyer Consultation to learn more about you and to discuss how we plan to give you an awesome experience.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Get Pre-Approved...',
        // tslint:disable-next-line:max-line-length
        detail: `If you are paying cash, skip to step three(3). If you are already Pre-Approved, great! However, if not, we will recommend one of our awesome lending partners to let you know your BUYING POWER! Either way, your TECH Agent will request a copy of your proof-of-funds to go in your file.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Search and Tour Homes...',
        // tslint:disable-next-line:max-line-length
        detail: `Now that we have a Pre-Approval Letter or Proof-of-funds(Cash), now it’s time to go shopping! Together, lets find the perfect home for you.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Write an Offer...',
        // tslint:disable-next-line:max-line-length
        detail: `You’ve found the perfect home! Your TECH Agent will research the numbers and recommend the best price, write up the contract, and submit it to the Sellers Agent. 1 of 3 things are going to happen: #1 Reject your offer, #2 Counter your offer, or #3 Accept your offer. We include the amount of your Buyer Rebate(Up to $5,000*) in the contract for full disclosure to all parties.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Deliver Checks...',
        // tslint:disable-next-line:max-line-length
        detail: `Once the Seller accepts your offer, they will sign and execute the contract. Your TECH Agent will ask you for a check for Earnest Money. Depending on your state, there may be other checks that need to be written to fully execute the contract. These checks MUST be delivered within 2 to 3 days. Delays will make your contract voidable.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Do Inspections...',
        // tslint:disable-next-line:max-line-length
        detail: `Immediately after the contract has been fully executed and checks have been delivered, your TECH Agent will hire an Inspector to inspect the property to ensure that there aren’t any major defects and/or issues. 1 of 3 things are going to happen: #1 Accept the Inspectors findings, #2 Request that Seller to fix the defects and issues found by the Inspector, or #3 Renegotiate the price of the home taking the estimated amount of the defects and issues into consideration. FYI: Be prepared to pay the Inspector before receiving the inspection report.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Final Contract...',
        // tslint:disable-next-line:max-line-length
        detail: `1 of 2 things will happen at this stage: #1 You and the seller don’t come to terms and decide to terminate the contract, or #2 You and the seller come to terms and we now have a Final Contract that’s ready to go to your Lender(Mortgage). `
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Mortgage Processing and Underwriting...',
        // tslint:disable-next-line:max-line-length
        detail: `At this stage, your Lender will begin underwriting two things: #1 You, and #2 the property. They will order an appraisal immediately after we notify them that we have a Final Contract. Be prepared at this stage to provide more financial information and clear lending conditions. At this step, we will also tell the Mortgage Company the amount of your Buyer Rebate(Up to $5,000*) so it can be credited at closing to reduce the amount of funds you need to bring to the table.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Pre-Closing Walk Thru...',
        // tslint:disable-next-line:max-line-length
        detail: `The Mortgage Company has given a “CLEAR-to-CLOSE” which means everything is done and ready to go to the Attorney/Title Company. However, before we sign on the dotted-line, your TECH Agent is taking you back to the property to make sure that everything is as we negotiated in the contract. If something is damaged or not done, your TECH Agent will immediately contact the Sellers Agent to remedy the issues. However, if everything is perfect, then you are ready to sign the Lenders paperwork to finalize the deal. Be sure to let your TECH Agent know if you need help setting up cable, security, and/or utilities. Our Concierge Team is there to roll out the red carpet!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Closing Time...',
        // tslint:disable-next-line:max-line-length
        detail: `The Attorney/Title Company will tell you and your TECH Agent the amount you need to bring to the closing table. This can not be a personal check. Go to your bank, get a cashiers-check, and bring it to the closing. Only do a wire if necessary. Sign your life away, and welcome home!!`
      }
    ];
  }
}
