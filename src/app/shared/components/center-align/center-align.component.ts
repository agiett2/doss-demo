import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-center-align',
  templateUrl: './center-align.component.html',
  styleUrls: ['./center-align.component.scss']
})
export class CenterAlignComponent implements OnInit {
@Input() bgColor?: string;
@Input() textColor?: string;
@Input() centerText?: boolean;
  constructor(public contentService: ContentServcieAbstract) { }

  ngOnInit(): void {
  }

}
