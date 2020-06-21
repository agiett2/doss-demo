import { Component, OnInit } from '@angular/core';
import { BuyerFaqComponent } from './buyer-faq/buyer-faq.component';
import { BuyerConsultationComponent } from './buyer-consultation/buyer-consultation.component';
import { BuyerStepsComponent } from './buyer-steps/buyer-steps.component';
import { AgentCompareTableRowDataInterface } from 'src/app/shared/interfaces/agent-compare-table-row-data.interface';
import { TableDataInterface } from 'src/app/shared/interfaces/table-data.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public disclaimerText1 = '*Buyer Rebate is subject to lender approval and buyer agent commission. ';
  public disclaimerText2 = '*Home-Tours requested before 3pm are scheduled for the same day. ';
  public disclaimerText3 = '*TECH Agents can help setup Cable/Internet, Security, Utilities, etc.';
  public tableHeading = 'TRADITIONAL Agent vs. TECH Agent';
  public tableHeadingData: string[];
  public compareTableData: TableDataInterface;
  public tableRowDate: AgentCompareTableRowDataInterface[];

  // public agents: ServiceOfferings[]; create model and list of service for table
  public component: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.heading = 'Find a HOUSE, make it your HOME…';
    this.subHeading = 'Together, lets find a place to create beautiful memories!';
    this.tableHeadingData = ['Service', 'Traditional Agent', 'TechAgent'];
    this.tableRowDate = [
      {
        service: 'Do a BUYER Consultation',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Help BUYER get Pre-Approved(If Applicable)',
        isTraditionalAgent: true,
        istechAgent: false
      },
      {
        service: 'Help BUYER find the perfect home',
        isTraditionalAgent: true,
        istechAgent: true
      },
      {
        service: 'Same Day Home-Tours*',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Contract Support/Digital Signatures',
        isTraditionalAgent: true,
        istechAgent: true
      },
      {
        service: 'Negotiation Expert',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Attend Home Inspections',
        isTraditionalAgent: true,
        istechAgent: true
      },
      {
        service: 'Has a TEAM to support BUYER',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Buyer Rebate up to $5,000*',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Staff Real Estate Attornet (If Applicable)',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'COncierge Services*',
        isTraditionalAgent: false,
        istechAgent: true
      },
      {
        service: 'Attend Closing',
        isTraditionalAgent: true,
        istechAgent: true
      }
    ];
    this.compareTableData = { heading: this.tableHeadingData, row: this.tableRowDate };
  }
}
