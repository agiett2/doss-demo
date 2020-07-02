import { Component, OnInit } from '@angular/core';
import { SuccessStepsInterface } from 'src/app/shared/interfaces/success-steps.interface';

@Component({
  selector: 'app-rent-steps',
  templateUrl: './rent-steps.component.html',
  styleUrls: ['./rent-steps.component.scss']
})
export class RentStepsComponent implements OnInit {
  public steps: SuccessStepsInterface[];
  public heading: string;
  constructor() { }

  ngOnInit(): void {
    this.heading = 'The Steps to LIVING ANYWHERE';
    // tslint:disable-next-line: max-line-length
    this.steps = [
      // tslint:disable-next-line: max-line-length
      { step: 'Tenant Consultation', detail: `At DOSS, to ensure that we really understand your goals and objectives, we do a Tenant Consultation to learn more about you and to discuss how we plan to give you an awesome experience.` },
      // tslint:disable-next-line: max-line-length
      { step: 'Complete Paperwork', detail: `During your Tenant Consultation, if you decide to retain one of our techAGENT to represent you, the next step is to do some simple paperwork, get a copy of your I.D., etc… This way, once we find something you really like, we already have a completed file on you to beat out other potential tenants vowing for the same property. Great spaces don’t last long!` },
      // tslint:disable-next-line: max-line-length
      { step: 'Search and Tour Properties', detail: `Now that we have a very clear understanding of what you are looking for and where, let's start looking for your next experience. If you find something, get it to your TECH Agent as soon as possible so they can schedule a tour of it. If your TECH Agent finds something they think you might like, but you aren’t available? No worries! Your TECH Agent will go preview the property to make sure it’s something you’d like.` },
      // tslint:disable-next-line: max-line-length
      { step: 'Write Contract/Offer', detail: `Wow! We’ve found exactly what you’ve been looking for. Lets submit your application and supporting documentation as soon as possible. Again, good properties don’t last long! Be sure to get everything your TECH Agent needs in order to help you qualify for the property you really want in a timely manner.` },
      // tslint:disable-next-line: max-line-length
      { step: 'Welcome home, to a NEW Experience', detail: `You were APPROVED! Congratulations… Now it’s time to get the keys and schedule your move-in date. Be sure to let your TECH Agent know if you need help setting up cable, security, and/or utilities. Our Concierge Team is there to roll out the red carpet!` },
    ];
  }
}
