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
  { path: 'home/:firstName', component: HomeComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'adminHome/:id', component: AdminHomeComponent, canActivate:[RouteGuardService]},
  { path: 'adminMovies/:id', component: AdminMoviesComponent, canActivate:[RouteGuardService]},
  { path: 'adminUsers/:id', component: AdminUserComponent, canActivate:[RouteGuardService]},
  { path: 'adminAddMovie/:id', component: AdminAddMovieComponent, canActivate:[RouteGuardService]},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
