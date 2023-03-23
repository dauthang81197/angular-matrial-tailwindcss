import { Route } from '@angular/router';
import { SignUpComponent } from '@app/modules/auth/sign-up/sign-up.component';

export const authSignInRoutes: Route[] = [
  {
    path     : '',
    component: SignUpComponent
  }
];
