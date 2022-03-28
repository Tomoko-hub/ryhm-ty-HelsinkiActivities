import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapComponent } from './map/map.component';
import { ActivitySearchComponent } from './activity-search/activity-search.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { WeatherComponent } from './weather/weather.component';

import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LoginButtonComponent } from './login-button/login-button.component';
import { ExternalApiComponent } from './external-api/external-api.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    ActivitySearchComponent,
    ActivityDetailComponent,
    WeatherComponent,
    LoginButtonComponent,
    ExternalApiComponent,
    NavBarComponent,
    HomeComponent,
    ProfileComponent,
    MainNavComponent,
    HomeContentComponent,
    LogoutButtonComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    AuthModule.forRoot({
      ...env.auth,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
