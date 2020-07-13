import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ModalServiceAbstract } from './abstract/modal.service.abstract';
import { Subject } from 'rxjs';

@Injectable()
export class ModalService implements ModalServiceAbstract {
  public message$: Subject<string> = new Subject<string>();
  constructor(private dialog: MatDialog) {}
  public open(type?: string): void {
    console.log(type);
    if (type === 'payment') {
        this.message$.next('Processing Payment');
    }
    // switch (type) {
    //   case 'payment':
    //     this.message$.next('Processing Payment');
    //     break;
    //   case 'email':
    //     this.message$.next('Sending Email');
    //     break;
    //   default:
    //     this.message$.next('');
    // }

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
  }
}
