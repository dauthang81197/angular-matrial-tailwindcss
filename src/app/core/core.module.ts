import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from '@app/auth/auth.module';
@NgModule({
  imports: [AuthModule],
  providers: [],
  exports: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
}
