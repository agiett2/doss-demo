import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';

@Component({
  selector: 'app-landlord-faq',
  templateUrl: './landlord-faq.component.html',
  styleUrls: ['./landlord-faq.component.scss']
})
export class LandlordFaqComponent implements OnInit {

  constructor(public contentService: ContentServcieAbstract) { }
  public faqList: FaqInterface[];
  ngOnInit(): void {
    this.faqList = [{
      // tslint:disable-next-line: max-line-length
      question: 'How much will DOSS charge to market and lease my property', answer: `There is not an upfront fee to work with a TECH Agent at DOSS. We get paid when checks are cut by finding you the right Tenant for your property.  The fee is one months rent. Example: If you are renting your property for $2,500.00, the Tenant will produce two checks. One check for $1,250 to you and another check for $1,250.00 written to DOSS Pros, LLC. We will distribute checks accordingly to Agents involved in the transaction.
  `},
    {
      // tslint:disable-next-line: max-line-length
      question: 'What makes DOSS different than Traditional Real Estate Brokerages?', answer: `DOSS is a Technology Company. We leverage technology to increase efficiencies in the process. Taking a systematic and transparent approach to working with our clients has proven to be very effective. Furthermore, DOSS has an In-House Media Company. This means that we provide the highest quality of works to market your property in the pursuit of giving it optimal exposure. You will work with a TECH Agent that only focuses on Rental Listings. This way, you have a dedicated Expert that knows how to get results. That’s what makes DOSS different! `
    },
    // tslint:disable-next-line: max-line-length
    { question: 'How will you market my property?', answer: `Unlike Traditional Brokerages, we have an In-House Media Company that does the Advertising and Marketing for our Landlords. We will take professional photos to ensure that we capture the best features of your property to attract as many qualified Tenants as possible. We will market your property on the MLS, Realtor.com, Trulia, Zillow, and many other real estate search engines.` },
    {
      question: 'Will my property be put on the MLS, Realtor.com, and Zillow?',
      answer: `Yes! Your TECH Agent will place your property on the MLS. In addition, we will manage all phone calls and help you select the
right Tenant for your property
`},
    {
      // tslint:disable-next-line: max-line-length
      question: 'Will you put a lockbox and signage on my property? ', answer: `We work for you! However, we recommend putting a lockbox and signage on your property if possible. This makes the property noticeable to people that are passing by and may be interested in the area.  However, it depends on a few factors that might make sense as to why we can’t put a lockbox or signage on the property.`
    }];
  }

}
