import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { RoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { UserService } from './auth/user.service';
import { FormsModule } from '@angular/forms';
import { FeedComponent } from './feed/feed.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { ClothesService } from './feed/clothes.service';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { HistoryComponent } from './history/history.component';
import { HistoryService } from './history/history.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    FeedComponent,
    ProfileComponent,
    CartComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RoutingModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService, ClothesService, CartService, HistoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
