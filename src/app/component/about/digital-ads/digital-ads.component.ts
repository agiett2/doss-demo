import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-ads',
  templateUrl: './digital-ads.component.html',
  styleUrls: ['./digital-ads.component.scss']
})
export class DigitalAdsComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public videos: string[];

  constructor() { }

  ngOnInit(): void {
    this.heading = 'digital ads';
    this.subHeading = 'learn about doss';
    this.videos = ['iiii', 'uuuuu', 'ooooo', 'ppppp'];
  }

}
