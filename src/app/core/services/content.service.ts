import { Injectable } from '@angular/core';
import { ColorEnums } from '../enums/color.enum';
import { ContentServcieAbstract } from './abstract/content.service.abstract';

@Injectable()
export class ContentService implements ContentServcieAbstract {
  constructor() {}

  public getColor = (color: string): string => {
    switch (color) {
      case 'blue':
        return ColorEnums.Blue;
      case 'orange':
        return ColorEnums.Orange;
      case 'grey':
        return ColorEnums.AccentGrey;
      default:
        return ColorEnums.White;
    }
  }
}
