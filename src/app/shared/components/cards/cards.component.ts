import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  isActive: boolean = false;
  @Input() set setIsActive(value: boolean){
    this.isActive = value;
  }
  @Input() name: string = '10_of_clubs';

  constructor() { }

  ngOnInit(): void {
  }

}
