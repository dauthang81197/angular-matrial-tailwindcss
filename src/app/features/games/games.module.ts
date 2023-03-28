import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesRoutingModule } from './games-routing.module';
import { PokerComponent } from './poker/poker.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokerPopupComponent } from './poker/poker-popup/poker-popup.component';
import { GamesComponent } from '@app/features/games/games.component';


@NgModule({
  declarations: [
    GamesComponent,
    PokerComponent,
    PokerPopupComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    SharedModule
  ]
})
export class GamesModule { }
