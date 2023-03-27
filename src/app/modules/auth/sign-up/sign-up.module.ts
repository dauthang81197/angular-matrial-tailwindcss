import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from '@app/modules/auth/sign-up/sign-up.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { authSignInRoutes } from '@app/modules/auth/sign-up/sign-up.routing.module';
import { AuthService } from 'src/app/core/auth/auth.service';
import { ThangdtApiService } from '@app/thangdt-api/thangdt-api.service';



@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(authSignInRoutes)
  ],
  providers: [
    AuthService,
    ThangdtApiService
  ]
})
export class SignUpModule { }
