import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  name: string = '10_of_clubs.svg';
  constructor() { }

  ngOnInit(): void {
  }

}
