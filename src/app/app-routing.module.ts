import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { RegisterBadmintonComponent } from './game/badminton/register-badminton/register-badminton.component';
import { RegisterBalapkarungComponent } from './game/balap-karung/register-balapkarung/register-balapkarung.component';
import { RegisterBalapkelerengComponent } from './game/balap-kelereng/register-balapkelereng/register-balapkelereng.component';
import { RegisterBasketballComponent } from './game/basket-ball/register-basketball/register-basketball.component';
import { RegisterBolavoliComponent } from './game/bola-voli/register-bolavoli/register-bolavoli.component';
import { RegisterMakankerupukComponent } from './game/makan-kerupuk/register-makankerupuk/register-makankerupuk.component';
import { RegisterSepakbolaComponent } from './game/sepak-bola/register-sepakbola/register-sepakbola.component';
import { RegisterSepaktakrawComponent } from './game/sepak-takraw/register-sepaktakraw/register-sepaktakraw.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},

  {path:'home',component:HomeComponent},

  {path:'login',component:LoginComponent},

  {path:'register',component:RegisterComponent},

  {path:'basket',loadChildren:()=>import('./game/basket-ball/basket-ball.module').then(mod=>mod.BasketBallModule)},
  {path:'register-basketball',component:RegisterBasketballComponent},

  {path:'badminton',loadChildren:()=>import('./game/badminton/badminton.module').then(mod=>mod.BadmintonModule)},
  {path:'register-badminton',component:RegisterBadmintonComponent},

  {path:'sepak-bola',loadChildren:()=>import('./game/sepak-bola/sepak-bola.module').then(mod=>mod.SepakBolaModule)},
  {path:'register-sepakbola',component:RegisterSepakbolaComponent},

  {path:'bola-voli',loadChildren:()=>import('./game/bola-voli/bola-voli.module').then(mod=>mod.BolaVoliModule)},
  {path:'register-bolavoli',component:RegisterBolavoliComponent},

  {path:'sepak-takraw',loadChildren:()=>import('./game/sepak-takraw/sepak-takraw.module').then(mod=>mod.SepakTakrawModule)},
  {path:'register-sepaktakraw',component:RegisterSepaktakrawComponent},

  {path:'balap-karung',loadChildren:()=>import('./game/balap-karung/balap-karung.module').then(mod=>mod.BalapKarungModule)},
  {path:'register-balapkarung',component:RegisterBalapkarungComponent},

  {path:'balap-kelereng',loadChildren:()=>import('./game/balap-kelereng/balap-kelereng.module').then(mod=>mod.BalapKelerengModule)},
  {path:'register-balapkelereng',component:RegisterBalapkelerengComponent},

  {path:'makan-kerupuk',loadChildren:()=>import('./game/makan-kerupuk/makan-kerupuk.module').then(mod=>mod.MakanKerupukModule)},
  {path:'register-makankerupuk',component:RegisterMakankerupukComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
