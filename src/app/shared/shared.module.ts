import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { WebcamModule } from 'ngx-webcam';
import { GoogleMapCustomComponent } from './components/google-map-custom/google-map-custom.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { CardsComponent } from './components/cards/cards.component';
import { WebcamComponent } from './components/webcam/webcam.component';

const SHARED_COMPONENTS = [BreadCrumbComponent, TextFieldComponent, GoogleMapCustomComponent, CardsComponent, WebcamComponent]

const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule, MatInputModule, MatBadgeModule, MatSlideToggleModule, MatMenuModule, MatDialogModule]

const SHARED_MODULES = [CommonModule, ReactiveFormsModule, FormsModule, WebcamModule];

const AGM_MODULES = [GoogleMapsModule]

const SHARED_IMPORTS_MODULES = [...SHARED_MODULES, ...MATERIAL_MODULES, ...AGM_MODULES];

const SHARED_EXPORTS_MODULES = [...SHARED_MODULES, ...MATERIAL_MODULES, ...AGM_MODULES];


@NgModule({
  imports: [...SHARED_IMPORTS_MODULES, RouterModule],
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  exports: [...SHARED_COMPONENTS, ...SHARED_EXPORTS_MODULES],
})
export class SharedModule {
}
