import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactComponent } from './contact/contact.component';
import { CountdownComponent } from './countdown/countdown.component';
import { DetailsComponent } from './details/details.component';
import { DressCodeComponent } from './dress-code/dress-code.component';
import './firebase-config'; // Import firebase-config.ts file
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { InvitationComponent } from './invitation/invitation.component';
import { PolaroidComponent } from './invitation/polaroid/polaroid.component';
import { LocationComponent } from './location/location.component';
import { ThanksComponent } from './thanks/thanks.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ListElementComponent } from './wishlist/list-element/list-element.component';
import { WishlistComponent } from './wishlist/wishlist.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InvitationComponent,
    LocationComponent,
    TimelineComponent,
    DressCodeComponent,
    ConfirmationComponent,
    ThanksComponent,
    ContactComponent,
    PolaroidComponent,
    DetailsComponent,
    CountdownComponent,
    WishlistComponent,
    GeneralComponent,
    ListElementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzDividerModule,
    NzRadioModule,
    NzCheckboxModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
