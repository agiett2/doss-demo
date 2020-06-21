import { Component, OnInit } from '@angular/core';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';

@Component({
  selector: 'app-seller-faq',
  templateUrl: './seller-faq.component.html',
  styleUrls: ['./seller-faq.component.scss']
})
export class SellerFaqComponent implements OnInit {
  public faqList: FaqInterface[];
  public missionHeadding = 'our mission';
  public missionMessage = 'To develop the BEST technology to make homeownership in America more affordable.';

  constructor() { }

  ngOnInit(): void {
    this.faqList = [{
      question: `How can DOSS charge less than the standard 3% commission and still provide Full Service?`,
      // tslint:disable-next-line: max-line-length
      answer: `That’s easy… It doesn’t cost thousands of dollars to effectively market and service your property to get it SOLD. DOSS is a TECH Company that uses the best systems and technology to increase transactional efficiencies so we can pass the savings on to you. As a matter of fact, we provide more exposure(marketing) for your property than any Traditional Brokerage! `
    },
    {
      question: `What type of Seller would use the DOSS Basic($395) Package?`, answer: `This Package is awesome for any Seller that wants to take a swing at selling their own house to save thousands of dollars and preserve some of their hard earned equity. However, DOSS Basic is awesome for Builders, FSBO’s, Investors, and Savvy Sellers. For an upfront fee of $395, Sellers can list their property on MLS, Realtor.com, Zillow, and many more platforms. In addition, Sellers can choose additional support from our Menu of Services to help market and secure their property. If the Seller is listing three(3) or more properties at one time, DOSS will defer the $395 listing fee and select “Menu of Services” until closing.`
    },
    {
      question: `Why does DOSS offer different Seller Packages?`,
      answer: `At DOSS, we don’t believe in one-size-fits-all… Sellers are different, and have different needs. Who are we to tell a Seller what they can or can’t do? You sell it, we can help! DOSS is a TECH Company that wants to offer the best services, at a fair price.`
    },
    {
      question: `Will I receive Full-Service with the 1% Listing Fee? `,
      answer: `Absolutely! Our TECH Agents are BETTER. FASTER. SMARTER. than the average Agent. With DOSS, you are working with a TEAM of tech savvy professionals that know how to work efficiently, provide your property with the best marketing strategy, and give you the best support to make your transaction smooth and stress-free… `
    },
    {
      question: `If I'm selling a property for a 1% Listings Fee and buying a new home, do I qualify for a 1% Buyer Rebate?`,
      answer: `No. DOSS helps sellers to realize a substantial savings with our 1% Listing Fee. When DOSS represents you on your new purchase, you don't pay us anything. The seller of the home you are buying pays DOSS. `
    }]
  }

}
