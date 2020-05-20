import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-left-align',
  templateUrl: './left-align.component.html',
  styleUrls: ['./left-align.component.scss']
})
export class LeftAlignComponent implements OnInit {
  @Input() bgColor?: string;
  @Input() textColor?: string;
  constructor(public contentService: ContentServcieAbstract) {}

  ngOnInit(): void {}
}
