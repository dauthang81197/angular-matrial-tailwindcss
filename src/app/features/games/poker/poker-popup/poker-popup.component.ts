import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-poker-popup',
  templateUrl: './poker-popup.component.html',
  styleUrls: ['./poker-popup.component.scss']
})
export class PokerPopupComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<PokerPopupComponent>) { }

  ngOnInit(): void {
  }

}
