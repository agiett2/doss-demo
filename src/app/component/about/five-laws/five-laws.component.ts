import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five-laws',
  templateUrl: './five-laws.component.html',
  styleUrls: ['./five-laws.component.scss']
})
export class FiveLawsComponent implements OnInit {
  public heading: string;

  constructor() { }

  ngOnInit(): void {
    this.heading = 'DOSS has adopted the GO-GIVER 5 LAWS of STRATOSPHERIC SUCCESS';
  }

}
