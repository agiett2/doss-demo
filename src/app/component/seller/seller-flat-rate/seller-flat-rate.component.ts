import { Component, OnInit } from '@angular/core';
import { TableDataInterface } from 'src/app/shared/interfaces/table-data.interface';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';


@Component({
  selector: 'app-seller-flat-rate',
  templateUrl: './seller-flat-rate.component.html',
  styleUrls: ['./seller-flat-rate.component.scss']
})
export class SellerFlatRateComponent implements OnInit {
  public isCheckingOut: boolean;
  public heading: string;
  public subHeading: string;
  public whatYouGetList: string[];
  public responsibilitiesList: string[];
  public tableData: TableDataInterface;
  public tableHeadingData: string[];
  public tableRowData: TableDataRowInterface[];

  constructor() { }

  ngOnInit(): void {
    this.isCheckingOut = false;
    this.heading = 'You get what you pay for!';
    this.subHeading = 'YOU SELL IT, we can help!';
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
      { selected: true, name: 'Base Fee', price: 595, isRequired: true },
      { selected: false, name: 'Pricing Support', price: 100, isRequired: false },
      { selected: false, name: 'Supra Lockbox Rental', price: 100, isRequired: false },
      { selected: false, name: 'Open Houses(2 hours)', price: 100, isRequired: false },
      { selected: false, name: 'Contract Negotiations/Support', price: 200, isRequired: false },
      {
        selected: false, name: 'Professional Photos', price: 225, isRequired: false,
        selectOptions: [{ name: 'Over 3,000 sft', price: 350 }, { name: 'Under 3,000 sft', price: 225 }]
      },
      {
        selected: false, name: 'Matterport 3D Home Tour', price: 375, isRequired: false,
        selectOptions: [{ name: 'Over 3,000 sft', price: 525 }, { name: 'Under 3,000 sft', price: 225 }]
      },
      { selected: false, name: '50 Full Color Property Booklet', price: 225, isRequired: false },
      {
        selected: false, name: 'Pro Photos/3D Home Tour', price: 525, isRequired: false,
        selectOptions: [{ name: 'Over 3,000 sft', price: 775 }, { name: 'Under 3,000 sft', price: 525 }]
      },
    ];
    this.tableData = { heading: this.tableHeadingData, row: this.tableRowData };

  }

  public updatePrice(e: any, data: TableDataRowInterface): void {
      data.price = parseInt(e.target.value, 10);

  }

  public checkBoxChanged(e: any, data: TableDataRowInterface) {
    data.selected = e.target.checked;
  }

  public checkout(): void {
    this.isCheckingOut = true;
  }
  public getSelectedMenu(menus: TableDataRowInterface[])
    : TableDataRowInterface[] {
    return menus.filter((data: TableDataRowInterface) => data.selected);
  }

  public getTotal(selectedMenus: TableDataRowInterface[]): number {
    let price = 0;

    selectedMenus.forEach((data: TableDataRowInterface) => {
      price = price + data.price;
    });
    return price;
  }
}

