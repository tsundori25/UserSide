import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { GameComponent } from './game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './admin/profile/profile.component';
import { DaftarComponent } from './admin/daftar/daftar.component';
import { HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { authIntercept, errorIntercept } from './auth/auth.intercept';
import { Banner2Component } from './banner2/banner2.component';
import { Banner3Component } from './banner3/banner3.component';
import { Banner4Component } from './banner4/banner4.component';
import { Banner5Component } from './banner5/banner5.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    BannerComponent,
    FooterComponent,
    GameComponent,
    ProfileComponent,
    DaftarComponent,
    Banner2Component,
    Banner3Component,
    Banner4Component,
    Banner5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [authIntercept, errorIntercept],
  bootstrap: [AppComponent],
})
export class AppModule {}
