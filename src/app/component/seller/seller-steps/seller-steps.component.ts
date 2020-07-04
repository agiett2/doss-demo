import { Component, OnInit } from '@angular/core';
import { StepsInterface } from 'src/app/shared/interfaces/steps.interface';

@Component({
  selector: 'app-seller-steps',
  templateUrl: './seller-steps.component.html',
  styleUrls: ['./seller-steps.component.scss']
})
export class SellerStepsComponent implements OnInit {
  public heading: string;
  public subHeadinig: string;
  public steps: StepsInterface[];
  constructor() { }

  ngOnInit(): void {
    this.heading = '10 STEPS to SELLING at the HIGHEST and BEST VALUE';
    this.steps = [
      {
        step: 'The Initial Phone Interview',
        // tslint:disable-next-line:max-line-length
        detail: `This is your initial contact with one of our techAGENT. This call is very important because it details what to expect during the In-House Consultation. However, there are two(2) very important questions: #1 What price do you have in mind for your property, and #2 When do you want to put it on the market? Furthermore, be prepared to showcase your home as if you are the Agent, while giving your tech AGENT a tour of your home. The objective is to hear you describe and highlight your property as you see it, so your tech AGENT can capture that essence and describe it to hundreds of potential buyers.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'In-House Seller Consultation',
        // tslint:disable-next-line:max-line-length
        detail: `This is when our tech AGENT comes to your home. As soon as they walk in the door, give them the GRAND TOUR of your property as if they are a buyer. Your tech AGENT will take a mental note of everything you describe and show them. Remember, we are BETTER. FASTER. SMARTER. than the average Agent. After the tour, have a place for everybody to sit down and discuss the tour. Your tech AGENT will share their thoughts about the property and the highlights you shared. Immediately after that, your tech AGENT will begin sharing with you the data surrounding your property, recent SOLDS, review your number, suggest a listing price, and execute a Listing Agreement. In addition, they are going to give you some recommended homework about how to maximize the value of your home. And, what to do to help it sell fast!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Freshen up the place/Make repairs',
        // tslint:disable-next-line:max-line-length
        detail: `Your tech AGENT will give you some recommended homework with a list of things they suggest you do to help improve the aesthetics of your home. Like they say, you have once at making a good first impression. To be more clear, a buyer knows within the first 10 seconds of walking through your front door if they are going to consider buying your home. Does your home smell good? Is it clean? Is it inviting and warm? Is it decluttered? Have you made repairs? All of this matters when selling a home. Don’t worry, we are here to help!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Media Day',
        // tslint:disable-next-line:max-line-length
        detail: `DOSS has a Media Division! Unlike 98% of the Traditional Brokerages throughout the country, we have an In-House Media Team that takes Professional Picture, a Matterport 3D Virtual Home Tour, 50 Professional High Resolution Property Flyers, a Digital Storybook, Digital Marketing Campaign, and much more… Media Day is the day we capture the beautiful features of your home to attract hundreds of buyers to get your home SOLD!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'The Best Day to List your Home',
        // tslint:disable-next-line:max-line-length
        detail: `Everything we do at DOSS is based on statistical data. Remember, we are BETTER. FASTER. SMARTER. than the average Agent. The data says, the overall best day to list your home on the MLS is a Thursday. Thursday evening, hundreds of buyers are looking for houses to tour over the weekend. Everyday matters, when it comes to selling a house!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Stay Ready',
        // tslint:disable-next-line:max-line-length
        detail: `Keeping a house “Show-Ready” while it’s on the market is the biggest task most sellers will experience. However, you have to keep your home show ready. The perfect buyer, might be the one that wants to see your house right now! Showings typically are scheduled between 8am and 8pm. Keep your house smelling good and show ready.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Open House',
        // tslint:disable-next-line:max-line-length
        detail: `Our goal is to get buyers in your home! DOSS will schedule an Open House the first Saturday and Sunday your house is on the market from 1pm to 3pm. Be prepared to leave the house during this time, and let us get it SOLD!`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'The Offer/The Contract',
        // tslint:disable-next-line:max-line-length
        detail: `A buyer makes an offer on your house. 1 of 3 things are going to happen: #1 You accept the offer, #2 You counter the offer, or #3 You reject the offer. Either way, once you agree to terms, everybody will sign the contract and the process begins. The first thing the Buyer is going to do is order a Property Inspection. Depending on the condition of your home when it’s inspected, the buyer could do 1 of 3 things: #1 Accept the condition of your home, #2 Ask you to make repairs, or #3 If they think your home is a money pit, they can terminate the contract and walk away. If you are going to buy a new home, and need to sell your house first, now is a good time to start searching and touring homes that you would like to see in person.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'Inspection Time',
        // tslint:disable-next-line:max-line-length
        detail: `The Buyers Inspection Company will come to inspect your house 1 to 3 days after you execute the contract. The Inspectors primary job is to make sure that the buyer isn’t purchasing a money pit. The inspection is a comprehensive document that reports perceived deficiencies in the property. Someone from the DOSS Team will attend the inspection on your behalf to hear and understand everything that may be of concern.`
      },
      // tslint:disable-next-line: max-line-length
      {
        step: 'The BIG DAY',
        // tslint:disable-next-line:max-line-length
        detail: `SOLD! All of the hard work and keeping the house “Show Ready” paid off. The Attorney/Title Company will tell you everything you need to bring to closing. Congratulations!`
      }
    ];
  }

}
