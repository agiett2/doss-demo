import { Component, OnInit } from '@angular/core';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';

@Component({
  selector: 'app-buyer-faq',
  templateUrl: './buyer-faq.component.html',
  styleUrls: ['./buyer-faq.component.scss']
})
export class BuyerFaqComponent implements OnInit {
  public faqs: FaqInterface[];
  public missionHeadding = 'our mission';
  public missionMessage = 'To develop the BEST technology to make homeownership in America more affordable.';
  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line: max-line-length
    this.faqs = [{
      // tslint:disable-next-line: max-line-length
      question: `What is a Buyer Rebate?`, answer: `A Buyer Rebate is a portion of a REALTORS® commission that’s provided to a Buyer as a credit to reduce their closing cost and/or to cover other expenses. Read what the Department of Justice(DOJ) has to say about Buyer Rebates.
    `},
    // tslint:disable-next-line: max-line-length
    { question: `How do I qualify to receive a Buyer Rebate?`, answer: `To qualify for a Buyer Rebate, you simply must purchase a property that is priced over $100k with one of our DOSS, TECH Agents. It’s just that easy…` },
    {
      // tslint:disable-next-line: max-line-length
      question: 'Do I have to use a DOSS(TECH Agent) REALTOR® to receive a Buyer Rebate?', answer: `Yes! Our Mission is to make homeownership in America more affordable. Contact one of our TECH Agents today at 1-877-770-3677.`
    },
  // tslint:disable-next-line: max-line-length
  {question: 'What will be the amount of my Buyer Rebate?', answer: `DOSS gives a Buyer Rebate up to $5,000. Our Buyer Rebate is 1% of the sales price of the home you purchase. Example: If you buy a $200,000 home, we will give you a $2,000(1%) Buyer Rebate at closing.`},
// tslint:disable-next-line: max-line-length
{question: `When will I receive my Buyer Rebate?`, answer: `You will receive the Buyer Rebate as a credit against your closing cost on your big day. This way, you can instantly save you money when it matters most!`}];
  }
}
