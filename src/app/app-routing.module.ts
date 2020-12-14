import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DaftarComponent } from './admin/daftar/daftar.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { LoginComponent } from './admin/login/login.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { RegisterComponent } from './admin/register/register.component';

import { BadmintonTeam1Component } from './game/badminton/team/badminton-team1/badminton-team1.component';
import { BadmintonTeam10Component } from './game/badminton/team/badminton-team10/badminton-team10.component';
import { BadmintonTeam2Component } from './game/badminton/team/badminton-team2/badminton-team2.component';
import { BadmintonTeam3Component } from './game/badminton/team/badminton-team3/badminton-team3.component';
import { BadmintonTeam4Component } from './game/badminton/team/badminton-team4/badminton-team4.component';
import { BadmintonTeam5Component } from './game/badminton/team/badminton-team5/badminton-team5.component';
import { BadmintonTeam6Component } from './game/badminton/team/badminton-team6/badminton-team6.component';
import { BadmintonTeam7Component } from './game/badminton/team/badminton-team7/badminton-team7.component';
import { BadmintonTeam8Component } from './game/badminton/team/badminton-team8/badminton-team8.component';
import { BadmintonTeam9Component } from './game/badminton/team/badminton-team9/badminton-team9.component';

import { BalapkarungTeam1Component } from './game/balap-karung/team/balapkarung-team1/balapkarung-team1.component';
import { BalapkarungTeam10Component } from './game/balap-karung/team/balapkarung-team10/balapkarung-team10.component';
import { BalapkarungTeam2Component } from './game/balap-karung/team/balapkarung-team2/balapkarung-team2.component';
import { BalapkarungTeam3Component } from './game/balap-karung/team/balapkarung-team3/balapkarung-team3.component';
import { BalapkarungTeam4Component } from './game/balap-karung/team/balapkarung-team4/balapkarung-team4.component';
import { BalapkarungTeam5Component } from './game/balap-karung/team/balapkarung-team5/balapkarung-team5.component';
import { BalapkarungTeam6Component } from './game/balap-karung/team/balapkarung-team6/balapkarung-team6.component';
import { BalapkarungTeam7Component } from './game/balap-karung/team/balapkarung-team7/balapkarung-team7.component';
import { BalapkarungTeam8Component } from './game/balap-karung/team/balapkarung-team8/balapkarung-team8.component';
import { BalapkarungTeam9Component } from './game/balap-karung/team/balapkarung-team9/balapkarung-team9.component';

import { BalapkelerengTeam1Component } from './game/balap-kelereng/team/balapkelereng-team1/balapkelereng-team1.component';
import { BalapkelerengTeam10Component } from './game/balap-kelereng/team/balapkelereng-team10/balapkelereng-team10.component';
import { BalapkelerengTeam2Component } from './game/balap-kelereng/team/balapkelereng-team2/balapkelereng-team2.component';
import { BalapkelerengTeam3Component } from './game/balap-kelereng/team/balapkelereng-team3/balapkelereng-team3.component';
import { BalapkelerengTeam4Component } from './game/balap-kelereng/team/balapkelereng-team4/balapkelereng-team4.component';
import { BalapkelerengTeam5Component } from './game/balap-kelereng/team/balapkelereng-team5/balapkelereng-team5.component';
import { BalapkelerengTeam6Component } from './game/balap-kelereng/team/balapkelereng-team6/balapkelereng-team6.component';
import { BalapkelerengTeam7Component } from './game/balap-kelereng/team/balapkelereng-team7/balapkelereng-team7.component';
import { BalapkelerengTeam8Component } from './game/balap-kelereng/team/balapkelereng-team8/balapkelereng-team8.component';
import { BalapkelerengTeam9Component } from './game/balap-kelereng/team/balapkelereng-team9/balapkelereng-team9.component';

import { BasketballTeam1Component } from './game/basket-ball/team/basketball-team1/basketball-team1.component';
import { BasketballTeam10Component } from './game/basket-ball/team/basketball-team10/basketball-team10.component';
import { BasketballTeam2Component } from './game/basket-ball/team/basketball-team2/basketball-team2.component';
import { BasketballTeam3Component } from './game/basket-ball/team/basketball-team3/basketball-team3.component';
import { BasketballTeam4Component } from './game/basket-ball/team/basketball-team4/basketball-team4.component';
import { BasketballTeam5Component } from './game/basket-ball/team/basketball-team5/basketball-team5.component';
import { BasketballTeam6Component } from './game/basket-ball/team/basketball-team6/basketball-team6.component';
import { BasketballTeam7Component } from './game/basket-ball/team/basketball-team7/basketball-team7.component';
import { BasketballTeam8Component } from './game/basket-ball/team/basketball-team8/basketball-team8.component';
import { BasketballTeam9Component } from './game/basket-ball/team/basketball-team9/basketball-team9.component';

import { BolavoliTeam1Component } from './game/bola-voli/team/bolavoli-team1/bolavoli-team1.component';
import { BolavoliTeam10Component } from './game/bola-voli/team/bolavoli-team10/bolavoli-team10.component';
import { BolavoliTeam2Component } from './game/bola-voli/team/bolavoli-team2/bolavoli-team2.component';
import { BolavoliTeam3Component } from './game/bola-voli/team/bolavoli-team3/bolavoli-team3.component';
import { BolavoliTeam4Component } from './game/bola-voli/team/bolavoli-team4/bolavoli-team4.component';
import { BolavoliTeam5Component } from './game/bola-voli/team/bolavoli-team5/bolavoli-team5.component';
import { BolavoliTeam6Component } from './game/bola-voli/team/bolavoli-team6/bolavoli-team6.component';
import { BolavoliTeam7Component } from './game/bola-voli/team/bolavoli-team7/bolavoli-team7.component';
import { BolavoliTeam8Component } from './game/bola-voli/team/bolavoli-team8/bolavoli-team8.component';
import { BolavoliTeam9Component } from './game/bola-voli/team/bolavoli-team9/bolavoli-team9.component';

import { MakankerupukTeam1Component } from './game/makan-kerupuk/team/makankerupuk-team1/makankerupuk-team1.component';
import { MakankerupukTeam10Component } from './game/makan-kerupuk/team/makankerupuk-team10/makankerupuk-team10.component';
import { MakankerupukTeam2Component } from './game/makan-kerupuk/team/makankerupuk-team2/makankerupuk-team2.component';
import { MakankerupukTeam3Component } from './game/makan-kerupuk/team/makankerupuk-team3/makankerupuk-team3.component';
import { MakankerupukTeam4Component } from './game/makan-kerupuk/team/makankerupuk-team4/makankerupuk-team4.component';
import { MakankerupukTeam5Component } from './game/makan-kerupuk/team/makankerupuk-team5/makankerupuk-team5.component';
import { MakankerupukTeam6Component } from './game/makan-kerupuk/team/makankerupuk-team6/makankerupuk-team6.component';
import { MakankerupukTeam7Component } from './game/makan-kerupuk/team/makankerupuk-team7/makankerupuk-team7.component';
import { MakankerupukTeam8Component } from './game/makan-kerupuk/team/makankerupuk-team8/makankerupuk-team8.component';
import { MakankerupukTeam9Component } from './game/makan-kerupuk/team/makankerupuk-team9/makankerupuk-team9.component';

import { SepakbolaTeam1Component } from './game/sepak-bola/team/sepakbola-team1/sepakbola-team1.component';
import { SepakbolaTeam10Component } from './game/sepak-bola/team/sepakbola-team10/sepakbola-team10.component';
import { SepakbolaTeam2Component } from './game/sepak-bola/team/sepakbola-team2/sepakbola-team2.component';
import { SepakbolaTeam3Component } from './game/sepak-bola/team/sepakbola-team3/sepakbola-team3.component';
import { SepakbolaTeam4Component } from './game/sepak-bola/team/sepakbola-team4/sepakbola-team4.component';
import { SepakbolaTeam5Component } from './game/sepak-bola/team/sepakbola-team5/sepakbola-team5.component';
import { SepakbolaTeam6Component } from './game/sepak-bola/team/sepakbola-team6/sepakbola-team6.component';
import { SepakbolaTeam7Component } from './game/sepak-bola/team/sepakbola-team7/sepakbola-team7.component';
import { SepakbolaTeam8Component } from './game/sepak-bola/team/sepakbola-team8/sepakbola-team8.component';
import { SepakbolaTeam9Component } from './game/sepak-bola/team/sepakbola-team9/sepakbola-team9.component';

import { SepaktakrawTeam1Component } from './game/sepak-takraw/team/sepaktakraw-team1/sepaktakraw-team1.component';
import { SepaktakrawTeam10Component } from './game/sepak-takraw/team/sepaktakraw-team10/sepaktakraw-team10.component';
import { SepaktakrawTeam2Component } from './game/sepak-takraw/team/sepaktakraw-team2/sepaktakraw-team2.component';
import { SepaktakrawTeam3Component } from './game/sepak-takraw/team/sepaktakraw-team3/sepaktakraw-team3.component';
import { SepaktakrawTeam4Component } from './game/sepak-takraw/team/sepaktakraw-team4/sepaktakraw-team4.component';
import { SepaktakrawTeam5Component } from './game/sepak-takraw/team/sepaktakraw-team5/sepaktakraw-team5.component';
import { SepaktakrawTeam6Component } from './game/sepak-takraw/team/sepaktakraw-team6/sepaktakraw-team6.component';
import { SepaktakrawTeam7Component } from './game/sepak-takraw/team/sepaktakraw-team7/sepaktakraw-team7.component';
import { SepaktakrawTeam8Component } from './game/sepak-takraw/team/sepaktakraw-team8/sepaktakraw-team8.component';
import { SepaktakrawTeam9Component } from './game/sepak-takraw/team/sepaktakraw-team9/sepaktakraw-team9.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},

  {path:'login',component:LoginComponent},

  {path:'register',component:RegisterComponent},

  {path:'forgot-password',component:ForgotPasswordComponent},

  {path:'profile',component:ProfileComponent},

  {path:'daftar',component:DaftarComponent},

  {path:'badminton',loadChildren:()=>import('./game/badminton/badminton.module').then(mod=>mod.BadmintonModule)},
  {path:'detail-badminton-1',component:BadmintonTeam1Component},
  {path:'detail-badminton-2',component:BadmintonTeam2Component},
  {path:'detail-badminton-3',component:BadmintonTeam3Component},
  {path:'detail-badminton-4',component:BadmintonTeam4Component},
  {path:'detail-badminton-5',component:BadmintonTeam5Component},
  {path:'detail-badminton-6',component:BadmintonTeam6Component},
  {path:'detail-badminton-7',component:BadmintonTeam7Component},
  {path:'detail-badminton-8',component:BadmintonTeam8Component},
  {path:'detail-badminton-9',component:BadmintonTeam9Component},
  {path:'detail-badminton-10',component:BadmintonTeam10Component},

  {path:'basket',loadChildren:()=>import('./game/basket-ball/basket-ball.module').then(mod=>mod.BasketBallModule)},
  {path:'detail-basketball-1',component:BasketballTeam1Component},
  {path:'detail-basketball-2',component:BasketballTeam2Component},
  {path:'detail-basketball-3',component:BasketballTeam3Component},
  {path:'detail-basketball-4',component:BasketballTeam4Component},
  {path:'detail-basketball-5',component:BasketballTeam5Component},
  {path:'detail-basketball-6',component:BasketballTeam6Component},
  {path:'detail-basketball-7',component:BasketballTeam7Component},
  {path:'detail-basketball-8',component:BasketballTeam8Component},
  {path:'detail-basketball-9',component:BasketballTeam9Component},
  {path:'detail-basketball-10',component:BasketballTeam10Component},

  {path:'sepak-bola',loadChildren:()=>import('./game/sepak-bola/sepak-bola.module').then(mod=>mod.SepakBolaModule)},
  {path:'detail-sepakbola-1',component:SepakbolaTeam1Component},
  {path:'detail-sepakbola-2',component:SepakbolaTeam2Component},
  {path:'detail-sepakbola-3',component:SepakbolaTeam3Component},
  {path:'detail-sepakbola-4',component:SepakbolaTeam4Component},
  {path:'detail-sepakbola-5',component:SepakbolaTeam5Component},
  {path:'detail-sepakbola-6',component:SepakbolaTeam6Component},
  {path:'detail-sepakbola-7',component:SepakbolaTeam7Component},
  {path:'detail-sepakbola-8',component:SepakbolaTeam8Component},
  {path:'detail-sepakbola-9',component:SepakbolaTeam9Component},
  {path:'detail-sepakbola-10',component:SepakbolaTeam10Component},

  {path:'bola-voli',loadChildren:()=>import('./game/bola-voli/bola-voli.module').then(mod=>mod.BolaVoliModule)},
  {path:'detail-bolavoli-1',component:BolavoliTeam1Component},
  {path:'detail-bolavoli-2',component:BolavoliTeam2Component},
  {path:'detail-bolavoli-3',component:BolavoliTeam3Component},
  {path:'detail-bolavoli-4',component:BolavoliTeam4Component},
  {path:'detail-bolavoli-5',component:BolavoliTeam5Component},
  {path:'detail-bolavoli-6',component:BolavoliTeam6Component},
  {path:'detail-bolavoli-7',component:BolavoliTeam7Component},
  {path:'detail-bolavoli-8',component:BolavoliTeam8Component},
  {path:'detail-bolavoli-9',component:BolavoliTeam9Component},
  {path:'detail-bolavoli-10',component:BolavoliTeam10Component},

  {path:'sepak-takraw',loadChildren:()=>import('./game/sepak-takraw/sepak-takraw.module').then(mod=>mod.SepakTakrawModule)},
  {path:'detail-sepaktakraw-1',component:SepaktakrawTeam1Component},
  {path:'detail-sepaktakraw-2',component:SepaktakrawTeam2Component},
  {path:'detail-sepaktakraw-3',component:SepaktakrawTeam3Component},
  {path:'detail-sepaktakraw-4',component:SepaktakrawTeam4Component},
  {path:'detail-sepaktakraw-5',component:SepaktakrawTeam5Component},
  {path:'detail-sepaktakraw-6',component:SepaktakrawTeam6Component},
  {path:'detail-sepaktakraw-7',component:SepaktakrawTeam7Component},
  {path:'detail-sepaktakraw-8',component:SepaktakrawTeam8Component},
  {path:'detail-sepaktakraw-9',component:SepaktakrawTeam9Component},
  {path:'detail-sepaktakraw-10',component:SepaktakrawTeam10Component},

  {path:'balap-karung',loadChildren:()=>import('./game/balap-karung/balap-karung.module').then(mod=>mod.BalapKarungModule)},
  {path:'detail-balapkarung-1',component:BalapkarungTeam1Component},
  {path:'detail-balapkarung-2',component:BalapkarungTeam2Component},
  {path:'detail-balapkarung-3',component:BalapkarungTeam3Component},
  {path:'detail-balapkarung-4',component:BalapkarungTeam4Component},
  {path:'detail-balapkarung-5',component:BalapkarungTeam5Component},
  {path:'detail-balapkarung-6',component:BalapkarungTeam6Component},
  {path:'detail-balapkarung-7',component:BalapkarungTeam7Component},
  {path:'detail-balapkarung-8',component:BalapkarungTeam8Component},
  {path:'detail-balapkarung-9',component:BalapkarungTeam9Component},
  {path:'detail-balapkarung-10',component:BalapkarungTeam10Component},

  {path:'balap-kelereng',loadChildren:()=>import('./game/balap-kelereng/balap-kelereng.module').then(mod=>mod.BalapKelerengModule)},
  {path:'detail-balapkelereng-1',component:BalapkelerengTeam1Component},
  {path:'detail-balapkelereng-2',component:BalapkelerengTeam2Component},
  {path:'detail-balapkelereng-3',component:BalapkelerengTeam3Component},
  {path:'detail-balapkelereng-4',component:BalapkelerengTeam4Component},
  {path:'detail-balapkelereng-5',component:BalapkelerengTeam5Component},
  {path:'detail-balapkelereng-6',component:BalapkelerengTeam6Component},
  {path:'detail-balapkelereng-7',component:BalapkelerengTeam7Component},
  {path:'detail-balapkelereng-8',component:BalapkelerengTeam8Component},
  {path:'detail-balapkelereng-9',component:BalapkelerengTeam9Component},
  {path:'detail-balapkelereng-10',component:BalapkelerengTeam10Component},

  {path:'makan-kerupuk',loadChildren:()=>import('./game/makan-kerupuk/makan-kerupuk.module').then(mod=>mod.MakanKerupukModule)},
  {path:'detail-makankerupuk-1',component:MakankerupukTeam1Component},
  {path:'detail-makankerupuk-2',component:MakankerupukTeam2Component},
  {path:'detail-makankerupuk-3',component:MakankerupukTeam3Component},
  {path:'detail-makankerupuk-4',component:MakankerupukTeam4Component},
  {path:'detail-makankerupuk-5',component:MakankerupukTeam5Component},
  {path:'detail-makankerupuk-6',component:MakankerupukTeam6Component},
  {path:'detail-makankerupuk-7',component:MakankerupukTeam7Component},
  {path:'detail-makankerupuk-8',component:MakankerupukTeam8Component},
  {path:'detail-makankerupuk-9',component:MakankerupukTeam9Component},
  {path:'detail-makankerupuk-10',component:MakankerupukTeam10Component},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
