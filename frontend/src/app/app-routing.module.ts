import { CartComponent } from './cart/cart.component';
import { UserMovieComponent } from './user-movie/user-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AdminAddMovieComponent } from './admin-add-movie/admin-add-movie.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminMoviesComponent } from './admin-movies/admin-movies.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorComponent } from './error/error.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteGuardService } from './route-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home/:firstName/:uId', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'adminHome/:id', component: AdminHomeComponent, canActivate:[RouteGuardService]},
  { path: 'adminMovies/:id', component: AdminMoviesComponent, canActivate:[RouteGuardService]},
  { path: 'adminUsers/:id', component: AdminUserComponent, canActivate:[RouteGuardService]},
  { path: 'adminAddMovie/:id', component: AdminAddMovieComponent, canActivate:[RouteGuardService]},
  { path: 'adminUpdateMovie/:uid/movie/:mid', component: UpdateMovieComponent, canActivate:[RouteGuardService]},
  { path: 'movie/:mId/user/:firstName/:uId', component: UserMovieComponent},
  { path: 'movie/:mId', component: UserMovieComponent},
  { path: 'cart/:uId', component: CartComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
