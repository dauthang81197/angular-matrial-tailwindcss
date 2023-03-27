import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from '@app/auth/auth.service';
import { AuthUtils } from '@app/auth/auth.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    /**
     * Constructor
     */
    constructor(
        private _authService: AuthService,
        // private dialogService: GlDialogService
    ) {
    }

    /**
     * Intercept
     *
     * @param req
     * @param next
     */
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        // Clone the request object
        let newReq = req.clone();

        // Request
        //
        // If the access token didn't expire, add the Authorization header.
        // We won't add the Authorization header if the access token expired.
        // This will force the server to return a "401 Unauthorized" response
        // for the protected API routes which our response interceptor will
        // catch and delete the access token from the local storage while logging
        // the user out from the app.
        if (
            this._authService.accessToken &&
            !AuthUtils.isTokenExpired(this._authService.accessToken)
        ) {
            newReq = req.clone({
                headers: req.headers.set(
                    'Authorization',
                    'Bearer ' + this._authService.accessToken
                ),
            });
        }

        // Response
      return next.handle(newReq)
            .pipe(
                // catchError((error) => {
                //     if (!(error instanceof HttpErrorResponse)) {
                //         return throwError(() => error);
                //     }
                //     const urlParts = newReq.url.toLowerCase().split('/');
                //     // Catch "401 Unauthorized" responses but only if they don't come from login method
                //     if (
                //         error.status === 401 &&
                //         !newReq.url.toLowerCase().includes('/users/login')
                //     ) {
                //         // Sign out
                //         this._authService.signOut();
                //
                //         // Reload the app
                //         location.reload();
                //     } else if (
                //         newReq.url.toLowerCase().includes('/users/login') ||
                //         newReq.url.toLowerCase().includes('publicdocument') ||
                //         newReq.url.toLowerCase().includes('resetpassword') ||
                //         newReq.url.toLowerCase().includes('peers/add') ||
                //         urlParts[urlParts.length - 2] === 'contentlibrary'
                //     ) {
                //         return throwError(() => error);
                //     } else {
                //         console.warn(
                //             error.statusText,
                //             error,
                //             newReq.url.toLowerCase()
                //         );
                //
                //
                //     }
                // })
            );
    }

    // showErrorPopUp(value: string): void {
    //     const buttons: GlDialogButton[] = [];
    //     const closeButton = new GlDialogButton();
    //     closeButton.id = 'validation-close-button';
    //     closeButton.text = 'Close';
    //     closeButton.dataTestId = 'close-button';
    //     closeButton.type = 'mat-button';
    //     closeButton.color = 'download-font-white';
    //     closeButton.disabled = false;
    //     closeButton.click = (): void => this.dialogService.closeDialog();
    //     closeButton.class =
    //         'mat-flat-button mat-button-base mat-primary mat-primary-hover';
    //
    //     buttons.push(closeButton);
    //
    //     const dialogOptions: GlDialogOptions = {
    //         dataTestId: 'error-dialog',
    //         buttons: buttons,
    //         icon: 'warning',
    //         iconColorClass: 'warning-icon-color',
    //         type: GlDialogTypes.warning,
    //         title: {
    //             text: 'Error',
    //             id: 'dialog-text',
    //             dataTestId: 'error-title'
    //         },
    //         text: [
    //             {
    //                 text: value,
    //                 id: 'dialog-text',
    //                 dataTestId: 'error-header',
    //             },
    //             {
    //                 text: '<br>',
    //                 id: 'dialog-text2',
    //             },
    //             {
    //                 text: 'Please contact the corporate team at engage@glasslewis.com for assistance.',
    //                 id: 'dialog-text3',
    //                 dataTestId: 'error-content',
    //             },
    //         ],
    //         blockText: {
    //             blockTextCopyToClipboard: true,
    //         },
    //         matDialogConfig: {
    //             maxWidth: '580px',
    //         },
    //     };
    //     this.dialogService.openDialog(dialogOptions);
    // }
}
