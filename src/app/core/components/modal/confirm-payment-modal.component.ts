import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
@Component({
  selector: 'app-modal-component',
  templateUrl: './confirm-payment-modal.component.html',
  styleUrls: ['./confirm-payment-modal.component.scss'],
})
export class ConfirmPaymentModalComponent implements OnInit {
  public dialogTitle: string;
  public dialogText: string;
  public services: TableDataRowInterface[];
  public showProgress: boolean;
  @Output() submitClicked = new EventEmitter<any>();
  public message: string;
  constructor(
    public dialogRef: MatDialogRef<ConfirmPaymentModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { dialogPrice: number, dialogServices: TableDataRowInterface[] }
  ) {}
  public ngOnInit(): void {
    this.showProgress = false;
    this.dialogText = `Please confirm your payment of $${this.data.dialogPrice}.00 for the following services:`;
    this.dialogTitle = 'Payment Confirmation';
    this.services = this.data.dialogServices;
  }

  public confirm = (): void => {
    this.showProgress = true;
    this.submitClicked.next(true);
    this.dialogRef.close();
  }

  public cancel = (): void => {
  this.dialogRef.close();
  }
}
