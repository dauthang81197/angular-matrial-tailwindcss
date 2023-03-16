import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { componentsRoutes } from '@app/features/components/components.routing.module';
import {
  ComponentsGoogleMapsComponent
} from '@app/features/components/components-google-maps/components-google-maps.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentsComponent } from '@app/features/components/components.component';


const COMPONENTS = [ComponentsComponent, ComponentsGoogleMapsComponent]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    RouterModule.forChild(componentsRoutes),
    SharedModule
  ]
})
export class ComponentsModule { }
