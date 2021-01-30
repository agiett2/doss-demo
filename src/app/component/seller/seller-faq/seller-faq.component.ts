import { Component, OnInit } from "@angular/core";
import { FaqInterface } from "src/app/shared/interfaces/faq.interface";

@Component({
  selector: "app-seller-faq",
  templateUrl: "./seller-faq.component.html",
  styleUrls: ["./seller-faq.component.scss"],
})
export class SellerFaqComponent implements OnInit {
  public faqList: FaqInterface[];
  public missionHeadding = "our mission";
  public missionMessage =
    "To develop the BEST technology to make homeownership in America more affordable.";

  constructor() {}

  ngOnInit(): void {
    this.faqList = [
      {
        question: `Why does DOSS offer three(3) different Seller Packages?`,
        answer: `At DOSS, we do not believe that one-size-fits-all! People are different and have different needs… You might be a veteran seller that wants total control, a seller that simply wants access to the MLS, or a seller that needs full service with all the bells and whistles. Either way, at DOSS, we have a seller package for you based on your experience and the level of service you need and want to successfully sell your home.`,
      },
      {
        question: `What is DOSSIT!? `,
        answer: `NO MORE MIDDLEMAN: This awesome listing package is the future of marketing real estate around the world. Property owners, for free, can list your property on DOSS to empower buyers and renters to easily find and contact you directly about your property on our NEXT ERA voice-activated real estate search marketplace.`,
      },
      {
        question: `Why would a Seller use a Flat Fee(FSBO) Service?`,
        answer: `No. DOSS helps sellers to realize a substantial savings with our 1% Listing Fee. When DOSS represents you on your new purchase, you don't pay us anything. The seller of the home you are buying pays DOSS. `,
      },
      {
        question: `What is DOSSIT!? `,
        answer: `This particular seller wants to participate in the sale of their property to preserve some of their hard earned equity. At the same time, they want access to the MLS for optimal exposure for their property. This hybrid service empowers a seller to pay an upfront Flat Fee($595) and select from our menu of services what they need and want to better market and sell their property.`,
      },
      {
        question: `How do I qualify for a 1% Listing Fee? And, do I actually receive Full-Service?`,
        answer: `The 1% Listing Fee is for sellers that are selling their current house and then buying a new home. And yes, DOSS provides full service that exceeds the services offered by most Traditional Brokerages throughout the country. Also, we are so confident and transparent about our Advertising & Marketing strategy, we provide it to our sellers in writing!`,
      },
      {
        question: `If I’m only selling a house and not buying a new home, do I still qualify for a 1% Listing Fee?`,
        answer: `Unfortunately, no… However, please know that the commission to sell your property is negotiable between you and our DOSS techAgent and/or DOSS Partner Agents.`,
      },
    ];
  }
}
