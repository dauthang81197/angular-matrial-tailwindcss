import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, RouterModule],
  // declarations: [...LAYOUT_COMPONENTS],
})
export class LayoutModule {}
