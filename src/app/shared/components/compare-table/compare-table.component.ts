import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';
import { TableDataInterface } from '../../interfaces/table-data.interface';

@Component({
  selector: 'app-compare-table',
  templateUrl: './compare-table.component.html',
  styleUrls: ['./compare-table.component.scss']
})
export class CompareTableComponent implements OnInit {
  @Input() public bgColor?: string;
  @Input() public textColor?: string;
  @Input() public heading?: string;
  @Input() public subHeading?: string;
  @Input() public data?: TableDataInterface;
  constructor(public contentService: ContentServcieAbstract) { }

  ngOnInit(): void {
  }

}
