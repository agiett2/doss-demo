import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-franchising',
  templateUrl: './franchising.component.html',
  styleUrls: ['./franchising.component.scss']
})
export class FranchisingComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public component: any;
  public message: string;
  public quote: string;
  public signature: string;
  constructor() { }

  ngOnInit(): void {
    this.heading = 'Open DOSS in your Market Area';
    this.subHeading = 'Finally, an opportunity to Franchise a Real Estate TECH brand!';
    this.message = `You never change things by fighting the existing reality. To change
    something, build a new model that makes the existing model obsolete.`;
    this.quote = 'You never chnage things by fighting the existing reality. To change something, build a new model that makes the ';
    this.signature = '-buminster fuller';
  }
}
