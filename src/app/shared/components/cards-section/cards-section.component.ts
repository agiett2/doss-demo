import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-cards-section',
  templateUrl: './cards-section.component.html',
  styleUrls: ['./cards-section.component.scss']
})
export class CardsSectionComponent implements OnInit {
  @Input() bgColor?: string;
  @Input() textColor: string;
  constructor(public contentService: ContentServcieAbstract) {}

  ngOnInit(): void {}
}
