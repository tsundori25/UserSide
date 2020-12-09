import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'basket',loadChildren:()=>import('./game/basket/basket.module').then(mod=>mod.BasketModule)},
  {path:'badminton',loadChildren:()=>import('./game/badminton/badminton.module').then(mod=>mod.BadmintonModule)},
  {path:'sepakbola',loadChildren:()=>import('./game/sepakbola/sepakbola.module').then(mod=>mod.SepakbolaModule)},
  {path:'voli',loadChildren:()=>import('./game/voli/voli.module').then(mod=>mod.VoliModule)},
  {path:'sepaktakraw',loadChildren:()=>import('./game/sepaktakraw/sepaktakraw.module').then(mod=>mod.SepaktakrawModule)},
  {path:'balapkarung',loadChildren:()=>import('./game/balapkarung/balapkarung.module').then(mod=>mod.BalapkarungModule)},
  {path:'balapkelereng',loadChildren:()=>import('./game/balapkelereng/balapkelereng.module').then(mod=>mod.BalapkelerengModule)},
  {path:'makankerupuk',loadChildren:()=>import('./game/makankerupuk/makankerupuk.module').then(mod=>mod.MakankerupukModule)},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
