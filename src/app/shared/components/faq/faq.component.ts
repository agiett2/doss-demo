import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';
import { FaqInterface } from '../../interfaces/faq.interface';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  @Input() public bgColor?: string;
  @Input() public textColor?: string;
  @Input() public faqs: FaqInterface[];
  @Input() public faqId: string;
  public dataParent = `#${this.faqId}`;

  constructor(public contentService: ContentServcieAbstract) { }
  ngOnInit(): void {
  }
  public getDataParent(data: string): string {
    return `#${data}`;
  }
  public setQuestionAriaControl(id: string, index: number): string {
    return `#${id}${index + 1}`;
  }
  public setAnswerId(id: string, index: number): string {
    return `${id}${index + 1}`;
  }

}
