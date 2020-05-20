import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent implements OnInit {
@Input() public heading?: string;
@Input() public subHeading?: string;
@Input() public caption?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
