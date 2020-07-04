import { Component, OnInit } from '@angular/core';
import { FaqInterface } from 'src/app/shared/interfaces/faq.interface';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-tenat-faq',
  templateUrl: './tenat-faq.component.html',
  styleUrls: ['./tenat-faq.component.scss']
})
export class TenatFaqComponent implements OnInit {
  public faqList: FaqInterface[];
  constructor(public contentServe: ContentServcieAbstract) { }

  ngOnInit(): void {
    this.faqList = [{
      // tslint:disable-next-line: max-line-length
      question: 'Do you charge any upfront fees to help me find a property?', answer: `No! Your tech AGENT will get paid by the Landlord.`},
    {
      // tslint:disable-next-line: max-line-length
      question: 'What makes DOSS different than Traditional Real Estate Brokerages?', answer: `DOSS is a Technology Company. We leverage technology to increase efficiencies in the process. Taking a systematic and transparent approach to working with our clients has proven to be very effective. Furthermore, DOSS has an In-House Media Company. This means that we provide the highest quality of works to market your property in the pursuit of giving it optimal exposure. You will work with a tech AGENT that only focuses on Rental Listings. This way, you have a dedicated Expert that knows how to get results. That’s what makes DOSS different! `
    },
    // tslint:disable-next-line: max-line-length
    { question: 'What documents will you need for my Tenant Consultation?', answer: `There will be just a few documents you will want to bring with you to your Tenant Consultation. They are as follows: Drivers License and copy of last two pay stubs.` },
    {
      question: 'When can I tour properties?',
      // tslint:disable-next-line: max-line-length
      answer: `For safety reasons, it is our company policy to conduct our initial Tenant  Consultation at our office or local Starbucks. Also, we must have an I.D. on file before touring any properties.`},
    {
      // tslint:disable-next-line: max-line-length
      question: 'What makes DOSS different than Traditional Real Estate Brokerages?', answer: `DOSS is a Technology Company. We leverage technology to increase efficiencies in the process. Taking a systematic and transparent approach to working with our clients has proven to be very effective. In addition, as a company, we take a best practices approach to working with our clients.`
    },
  {
    // tslint:disable-next-line: max-line-length
    question: 'Will I have to pay multiple Application Fees for background and credit checks?', answer: `This is a great question. Unfortunately, the honest answer is, it’s possible. During the Tenant Consultation, be very clear about what you need and want when it comes to where you want to live. Be forward about how much time you have to find a place. When you tour these properties with your tech AGENT, make sure you identify “the” property you really want. We want to drastically minimize the possibilities of having to pay multiple application fees if we can control it.`
  }];
  }

}
