import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public heroHeadig: string;
  public heroText: string;
  public glider: any;
  public movementHeading: string;
  public fullServiceSubHeading: string;
  public movementCaption: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.heroHeadig = 'Making homeownership in America more affordable!';
    this.heroText = `Full Service. Experienced Agents. Modern Technology. Save Thousands`;
    this.fullServiceSubHeading = 'Hire a TECH Company!';
    this.movementHeading = 'JOIN The MOVEMENT!';
    this.movementCaption = 'Therea O. sold a property for a Flat Fee with DOSS. SHe received Full-Service and saved over $7,000.';
  }

  public buyerPageRedirect(): void {
    this.router.navigate(['buyer']);
  }

  public sellPageRedirect(): void {
    this.router.navigate(['seller']);
  }

  public rentPageRedirect(): void {
    this.router.navigate(['rent']);
  }
}
