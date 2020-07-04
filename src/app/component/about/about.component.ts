import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public messages: string[];
  constructor() { }

  ngOnInit(): void {
    this.heading = 'OUR STORY';
    this.subHeading = 'The conception of a BIG idea...';
    // tslint:disable-next-line: max-line-length
    this.messages = [`This idea, that we could improve the real estate industry began during the dawn of the 2008 recession. We believed that something different than what has happened in this industry for the last 100 years, that we could build something special to radically evolve the way people search and transact property, and that we could successfully lower transactional cost for buyers and sellers without sacrificing the quality of service. These collective ideas and with a team that’s obsessed about solving these problems, DOSS was created.`,
      // tslint:disable-next-line: max-line-length
      `At DOSS, believe that we can create a Digital Brokerage that leverages the best technology to make homeownership in America more affordable.`,
      // tslint:disable-next-line: max-line-length
      `The real estate industry is the most antiquated, expensive, and fragmented industry in the world. With all of the technological advancements that have benefited the real estate industry, most of its practitioners collectively refuse to reduce the high cost that comes with buying and selling real estate. Although the Supreme Court has ruled against price-fixing and standard fees, the real estate industry continues to support this behavior. Routinely labeled a Discount Brokerage, as if commissions are non-negotiable, DOSS considers itself a Fair-Priced Digital Brokerage that opposes price-fixing(6%).`,
      // tslint:disable-next-line: max-line-length
      `With an In-house Media Company, DOSS is able to market and service a property better than any Traditional Brokerage for a Flat Fee. For buyers, DOSS is able to help find the best property, negotiate a favorable deal, protect their best interest, and give a BUYER REBATE up to $5000* to help lower their closing cost. Our TECH Agents are experienced, full-time, and trained Experts that proficiently use technology to provide the best service, at a fair price. Are you thinking about buying or selling a home? Hire a technology company!`,
    `DOSS: BETTER. FASTER. SMARTER.`,
  ];
  }
}
