import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '@env/environment';
import { THANGDT_API_URL } from '@app/thangdt-api/thangdt-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    LayoutModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: THANGDT_API_URL,
      useValue: environment.baseUrl,
    },

  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
