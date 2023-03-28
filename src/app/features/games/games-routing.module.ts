import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '@app/features/games/games.component';
import { PokerComponent } from '@app/features/games/poker/poker.component';

const routes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [{
    path: 'poker',
    component: PokerComponent
  }]
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
