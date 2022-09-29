import { InteractionService } from './interaction.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { UserMovieComponent } from './user-movie/user-movie.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AdminHomeComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    LogoutComponent,
    AdminMoviesComponent,
    AdminUserComponent,
    AdminAddMovieComponent,
    UpdateMovieComponent,
    UserMovieComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    InteractionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
