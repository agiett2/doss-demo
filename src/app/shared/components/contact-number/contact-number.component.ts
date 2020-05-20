import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';

@Component({
  selector: 'app-contact-number',
  templateUrl: './contact-number.component.html',
  styleUrls: ['./contact-number.component.scss']
})
export class ContactNumberComponent implements OnInit {
  @Input() textColor?: string;
  public contactInfo: string;
  constructor(public contentService: ContentServcieAbstract) { }

  ngOnInit(): void {
    this.contactInfo = 'Have questions? Call us at 1-877-770-3677';
  }

}
