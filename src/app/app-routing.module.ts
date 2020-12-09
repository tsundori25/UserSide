import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'basket',loadChildren:()=>import('./game/basket-ball/basket-ball.module').then(mod=>mod.BasketBallModule)},
  {path:'badminton',loadChildren:()=>import('./game/badminton/badminton.module').then(mod=>mod.BadmintonModule)},
  {path:'sepak-bola',loadChildren:()=>import('./game/sepak-bola/sepak-bola.module').then(mod=>mod.SepakBolaModule)},
  {path:'bola-voli',loadChildren:()=>import('./game/bola-voli/bola-voli.module').then(mod=>mod.BolaVoliModule)},
  {path:'sepak-takraw',loadChildren:()=>import('./game/sepak-takraw/sepak-takraw.module').then(mod=>mod.SepakTakrawModule)},
  {path:'balap-karung',loadChildren:()=>import('./game/balap-karung/balap-karung.module').then(mod=>mod.BalapKarungModule)},
  {path:'balap-kelereng',loadChildren:()=>import('./game/balap-kelereng/balap-kelereng.module').then(mod=>mod.BalapKelerengModule)},
  {path:'makan-kerupuk',loadChildren:()=>import('./game/makan-kerupuk/makan-kerupuk.module').then(mod=>mod.MakanKerupukModule)},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
