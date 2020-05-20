import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-doss',
  templateUrl: './learn-doss.component.html',
  styleUrls: ['./learn-doss.component.scss']
})
export class LearnDossComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public videos: string[];

  constructor() { }

  ngOnInit(): void {
    this.heading = 'learn about doss';
    this.subHeading = 'educational videos';
    this.videos = ['iiii', 'uuuuu', 'ooooo', 'ppppp', 'iiii', 'uuuuu', 'ooooo', 'ppppp'];
  }

}
