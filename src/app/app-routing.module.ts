import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarComponent } from './admin/daftar/daftar.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { LoginComponent } from './admin/login/login.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { RegisterComponent } from './admin/register/register.component';
import { DetailTeamComponent } from './tournament/detail-team/detail-team.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'daftar', component: DaftarComponent },

  {
    path: 'tournament',
    loadChildren: () =>
      import('./tournament/tournament.module').then((m) => m.TournamentModule),
  },
  { path: 'detail-team', component: DetailTeamComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
