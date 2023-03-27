import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  checked = false;
  formGroup: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private _router: Router) {
    this.formGroup = this.fb.group({
      email: ['darius.ngo@gmail.com'],
      password: ['Thang123@']
    })
  }

  ngOnInit(): void {
  }

  signIn(): void {
    this.authService.signIn(this.formGroup.value).subscribe({
      next: (user) => {
        // this._monitoringService.setAuthenticatedUserContext(user);
        // Set the redirect url.
        // The '/signed-in-redirect' is a dummy url to catch the request and redirect the user
        // to the correct page after a successful sign in. This way, that url can be set via
        // routing file and we don't have to touch here.
        // let redirectURL =
        //   this._activatedRoute.snapshot.queryParamMap.get(
        //     'redirectURL'
        //   ) || '/signed-in-redirect';
        //
        // if (!user.eula) {
        //   sessionStorage.setItem('is-accepted-tnc', 'false');
        //   this.termsAndConditionsService.setIsAcceptedTnc(false);
        //   redirectURL = '/terms-and-conditions';
        // } else {
        //   sessionStorage.setItem('is-accepted-tnc', 'true');
        // }

        // Navigate to the redirect url
        void this._router.navigateByUrl('');
      },
      error: (error) => {
        // Re-enable the form
        this.formGroup.enable();

        // Reset the form
        // this.signInNgForm.resetForm();

        // Set the alert
        // this.alert = {
        //   type: 'error',
        //   message:
        //     error.status === 401
        //       ? 'Incorrect username or password'
        //       : 'No active subscription',
        // };

        // Show the alert
        // this.showAlert = true;
      },
    })
  }
}
