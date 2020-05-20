import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  @Input() heading?: string;
  @Input() text?: string;
  @Input() backgroundImage?: string;
  public imageUri: string;
  constructor() { }

  ngOnInit(): void {
    this.imageUri = `url('assets/images/${this.backgroundImage}')`;
  }

}
