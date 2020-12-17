import { Component, OnInit } from '@angular/core';
import { TableDataInterface } from 'src/app/shared/interfaces/table-data.interface';
import { AgentCompareTableRowDataInterface } from 'src/app/shared/interfaces/agent-compare-table-row-data.interface';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-seller',
    templateUrl: './seller.component.html',
    styleUrls: ['./seller.component.scss']
})
export class SellerComponent implements OnInit {
    public heading: string;
    public subheading: string;
    public compareTableHeading: string;
    public compareTableSubHeading: string;
    public compareTableData: TableDataInterface;
    public tableHeadingData: string[];
    public tableRowDate: AgentCompareTableRowDataInterface[];
    public matterportLink: string = environment.matterport.link;

    constructor() { }

    ngOnInit(): void {
        this.heading = 'A Tech Company, that sells real estate!';
        this.subheading =
            'BETTER Marketing, BETTER Service, and BETTER Support for a Flat Fee...';
        this.compareTableHeading = 'Side-by-Side Comparison';
        this.compareTableSubHeading =
            'You get what you pay for: Great service, at a fair price!';
        this.tableHeadingData = ['Service', 'Traditional Agent', '$395', '$1,295*'];
        // tslint:disable-next-line:max-line-length
        this.tableRowDate = [
            {
                service: 'Flat Fee',
                isTraditionalAgent: false,
                isThreeHundrednineFive: true,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Local Agen',
                isTraditionalAgent: false,
                isThreeHundrednineFive: true,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Open Houses',
                isTraditionalAgent: true,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Expert Negotiators',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'The Support of a TEAM',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Concierge Services/Support',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Attend all Inspections',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Professional Photos',
                isTraditionalAgent: true,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Professional 3D Virtual Tour',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Professional Yard Signage',
                isTraditionalAgent: true,
                isThreeHundrednineFive: true,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Professional Property Booklets',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Social Media Digital Marketing',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Pricing Support(CMA)',
                isTraditionalAgent: true,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Listed on MLS, Zillow, etc..',
                isTraditionalAgent: true,
                isThreeHundrednineFive: true,
                isOneThousandTwoHundresNineFive: true
            },
            {
                service: 'Staff Real Estate Attorney',
                isTraditionalAgent: false,
                isThreeHundrednineFive: false,
                isOneThousandTwoHundresNineFive: true
            },
        ];

        this.compareTableData = { heading: this.tableHeadingData, row: this.tableRowDate };
    }

}
