import { Component, OnInit, Input } from '@angular/core';
import { ContentServcieAbstract } from 'src/app/core/services/abstract/content.service.abstract';
import { SuccessStepsInterface } from '../../interfaces/success-steps.interface';

@Component({
  selector: 'app-success-steps',
  templateUrl: './success-steps.component.html',
  styleUrls: ['./success-steps.component.scss']
})
export class SuccessStepsComponent implements OnInit {
  @Input() steps?: SuccessStepsInterface[];
  @Input() textColor?: string;
  @Input() bgColor?: string;
  @Input() public stepsId: string;

  constructor(public contentService: ContentServcieAbstract) { }

  ngOnInit(): void {
  }

  public getDataParent(data: string): string {
    return `#${data}`;
  }
  public setStepAriaControl(id: string, index: number): string {
    return `#${id}${index + 1}`;
  }
  public setDetailId(id: string, index: number): string {
    return `${id}${index + 1}`;
  }

}
