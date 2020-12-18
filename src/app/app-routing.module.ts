import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarComponent } from './admin/daftar/daftar.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { LoginComponent } from './admin/login/login.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { RegisterComponent } from './admin/register/register.component';
import { BadmintonComponent } from './game/badminton/badminton.component';
import { BasketComponent } from './game/basket/basket.component';
import { SepakbolaComponent } from './game/sepakbola/sepakbola.component';
import { DetailTeamComponent } from './game/tournament/detail-team/detail-team.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },

  { path: 'forgot-password', component: ForgotPasswordComponent },

  { path: 'profile', component: ProfileComponent },

  { path: 'daftar', component: DaftarComponent },

  { path: 'badminton',component:BadmintonComponent},

  { path: 'sepakbola', component: SepakbolaComponent},

  { path: 'basket', component: BasketComponent},

  {
    path: 'badminton',
    loadChildren: () =>
      import('./game/badminton/badminton.module').then(
        (mod) => mod.BadmintonModule
      ),
  },

  {
    path: 'tournament',
    loadChildren: () =>
      import('./game/tournament/tournament.module').then(
        (mod) => mod.TournamentModule
      ),
  },
  { path: 'detail-team/:id', component: DetailTeamComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
