import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const SHARED_MODULES = [CommonModule, ReactiveFormsModule, FormsModule];

const SHARED_IMPORTS_MODULES = [...SHARED_MODULES, RouterModule];

const SHARED_EXPORTS_MODULES = [...SHARED_MODULES];

@NgModule({
  imports: [...SHARED_IMPORTS_MODULES],
  declarations: [],
  exports: [...SHARED_EXPORTS_MODULES],
})
export class SharedModule {}
