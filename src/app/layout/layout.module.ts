import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const LAYOUT_COMPONENTS = [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent]
@NgModule({
  declarations: [...LAYOUT_COMPONENTS],
  imports: [SharedModule, RouterModule],
})
export class LayoutModule {}
