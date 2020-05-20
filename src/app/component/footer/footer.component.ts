import { Component, OnInit } from '@angular/core';
import { LinksInterface } from 'src/app/core/model/links.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public learnMoreLinks: LinksInterface[] = [];
  public legalLinks: LinksInterface[] = [];
  public brandLinks: LinksInterface[] = [];

  constructor() { }

  ngOnInit(): void {

    this.learnMoreLinks = [
      { title: 'buy', path: '/buyer'},
      { title: 'sell', path: '/seller'},
      { title: 'rent', path: '/rent'},
      { title: 'about', path: '/about'},
      { title: 'franchising', path: '/franchising'}
    ];

    this.legalLinks = [
      { title: 'terms', path: ''},
      { title: 'privacy policy', path: ''},
      { title: 'TREC: consumer Protection', path: 'https://www.trec.texas.gov/forms/consumer-protection-notice'},
      { title: 'TREC: Information About Brokerage Service', path: ''}
    ];

    this.brandLinks = [
      { title: 'www.socialaents.com', path: 'www.socialaents.com'},
      { title: 'www.shopdoss.com', path: 'www.shopdoss.com'}
    ];
  }
}
