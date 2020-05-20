import { Component, OnInit } from '@angular/core';
import { TableDataInterface } from 'src/app/shared/interfaces/table-data.interface';

@Component({
  selector: 'app-seller-flat-rate',
  templateUrl: './seller-flat-rate.component.html',
  styleUrls: ['./seller-flat-rate.component.scss']
})
export class SellerFlatRateComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public whatYouGetList: string[];
  public responsibilitiesList: string[];
  public tableData: TableDataInterface;
  public tableHeadingData: string[];
  public tableRowData: { selected: boolean, menu: string, price: number }[];

  constructor() { }

  ngOnInit(): void {
    this.heading = 'You get what you pay for!';
    this.subHeading = 'Total Control. Maximum Exposure. Save Thousands.';
    this.whatYouGetList = [
      'List property on the MLS',
      'Property listed on Realtor.com, Zillow, etc…',
      'Professional Signage for Front Yard',
      'Manage Calls/Call Support'
    ];
    this.responsibilitiesList = [
      'Set a price for your home',
      'Manage/Schedule Home Tours',
      'Take Pictures/Video',
      'Negotiate your own contract'
    ];
    this.tableHeadingData = ['Menu of Services', 'Price'];
    this.tableRowData = [
      { selected: false, menu: 'Pricing Support', price: 75 },
      { selected: false, menu: 'Supra Lockbox Rental', price: 100 },
      { selected: false, menu: 'Open Houses(2 hours)', price: 100 },
      { selected: false, menu: 'Contract Negotiations/Support', price: 100 },
      { selected: false, menu: 'Professional Photos', price: 175 },
      { selected: false, menu: 'Matterport 3D Home Tour', price: 275 },
      { selected: false, menu: '50 Full Color Property Booklet', price: 275 },
      { selected: false, menu: 'Pro Photos/3D Home Tour', price: 350 },
    ];
    this.tableData = { heading: this.tableHeadingData, row: this.tableRowData };

  }

  public getSelectedMenu(menus: { selected: boolean, menu: string, price: number }[])
  : { selected: boolean, menu: string, price: number }[] {
    return menus.filter((data: { selected: boolean, menu: string, price: number }) => data.selected);
  }

  public getTotal(selectedMenus: { selected: boolean, menu: string, price: number }[]): number {
    let price = 0;
    selectedMenus.forEach((menue: { selected: boolean, menu: string, price: number }) => {
    price = price + menue.price;
    });
    return price;
  }
}

