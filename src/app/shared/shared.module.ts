import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { TextFieldComponent } from './components/text-field/text-field.component';
import { MatBadgeModule } from '@angular/material/badge';



const SHARED_COMPONENTS = [BreadCrumbComponent, TextFieldComponent]

const MATERIAL_MODULES = [MatIconModule, MatToolbarModule, MatButtonModule, MatInputModule, MatBadgeModule]

const SHARED_MODULES = [CommonModule, ReactiveFormsModule, FormsModule];

const SHARED_IMPORTS_MODULES = [...SHARED_MODULES, ...MATERIAL_MODULES];

const SHARED_EXPORTS_MODULES = [...SHARED_MODULES, ...MATERIAL_MODULES];

@NgModule({
  imports: [...SHARED_IMPORTS_MODULES, RouterModule],
  declarations: [
    SHARED_COMPONENTS,
  ],
  exports: [...SHARED_COMPONENTS, ...SHARED_EXPORTS_MODULES],
})
export class SharedModule {}
