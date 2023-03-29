import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';

@Component({
  selector: 'app-poker-popup',
  templateUrl: './poker-popup.component.html',
  styleUrls: ['./poker-popup.component.scss']
})
export class PokerPopupComponent implements OnInit {
  cardsDefault = ['clubs', 'diamonds', 'hearts', 'spades'];
  cardsPlay: { name: string, isEmpty: boolean }[] = []
  countOpenCard = 0;

  cardsSelected: string[] = []
  cards: string[] = [];

  cardsOfPlayer1: string[] = [];
  cardsOfPlayer2: string[] = [];

  isActive: boolean = false;

  timeRound: number = 60;

  turn: '1' | '2' = '1';


  constructor(public dialogRef: MatDialogRef<PokerPopupComponent>) {
    this.getCardsPlayDefault();
    for (let i = 1; i < 14; i++) {
      for (let card of this.cardsDefault) {
        this.cards.push(i + '_of_' + card)
      }
    }
    this.start();
  }

  ngOnInit(): void {

  }


  getCardsPlayDefault(): void {
    this.cardsPlay = [
      {
        name: '',
        isEmpty: true,
      },
      {
        name: '',
        isEmpty: true,
      },
      {
        name: '',
        isEmpty: true,
      },
      {
        name: '',
        isEmpty: true,
      },
      {
        name: '',
        isEmpty: true,
      },]
    this.countOpenCard = 0;
  }

  runTimer(): void {
    this.timeRound = 30;

    const makeIteration = (): void => {
      if ( this.timeRound > 0) {
        setTimeout(makeIteration, 1000); // 1 second waiting
      }
      this.timeRound -= 1;
    };

    setTimeout(makeIteration, 1000); // 1 second waiting
  }

  fold(): void {

  }

  start() {
    this.cardsOfPlayer1 = [];
    this.cardsOfPlayer2 = [];

    for(let i = 0; i<2; i++) {
      let nameCard1 = _.sample(this.cards)  || '';
      let nameCard2 = _.sample(this.cards)  || '';
      while (this.cardsSelected.includes(nameCard1)) {
        nameCard1 = _.sample(this.cards) || ''
      }
      while (this.cardsSelected.includes(nameCard2)) {
        nameCard2 = _.sample(this.cards) || ''
      }
      this.cardsOfPlayer1.push(_.sample(this.cards) || '')
      this.cardsOfPlayer2.push(_.sample(this.cards) || '')
      this.cardsSelected.push(nameCard1)
      this.cardsSelected.push(nameCard2)
    }
    this.isActive = true;
  }

  openCards(): void{
    if(this.countOpenCard < 3) {
      for (let i = 1; i < 4; i++) {
        this.openCard();
      }
    }else {
      this.openCard();
    }
  }
  openCard(): void {
    this.cardsPlay = this.cardsPlay.map((item, index) => {
      let name = _.sample(this.cards) || '';
      this.cardsSelected.includes(name)
      while (this.cardsSelected.includes(name)) {
        name = _.sample(this.cards) || ''
      }
      if (item.isEmpty && index === this.countOpenCard) {
        this.cardsSelected.push(name)
        return {
          name: name,
          isEmpty: false
        }
      }
      return item;

    })
    this.countOpenCard++;
  }

  resetCards(): void {
    this.isActive = false;
    this.getCardsPlayDefault();
    this.start();
  }
}
