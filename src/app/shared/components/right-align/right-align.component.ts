import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-right-align',
  templateUrl: './right-align.component.html',
  styleUrls: ['./right-align.component.scss']
})
export class RightAlignComponent implements OnInit {
  @Input() bgColor?: string;
  @Input() textColor?: string;
  constructor(public contentService: ContentServcieAbstract) { }

  ngOnInit(): void {
  }

}
