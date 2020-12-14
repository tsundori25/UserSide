import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketSepakbolaComponent } from './bracket-sepakbola/bracket-sepakbola.component';
import { InfoSepakbolaComponent } from './info-sepakbola/info-sepakbola.component';
import { RegisterSepakbolaComponent } from './register-sepakbola/register-sepakbola.component';
import { SepakBolaComponent } from './sepak-bola.component';
import { TeamSepakbolaComponent } from './team-sepakbola/team-sepakbola.component';

const routes: Routes = [
  {
    path:'',
    component:SepakBolaComponent,
    children:[
      {
        path:'team',
        component:TeamSepakbolaComponent
      },
      {
        path:'informasi',
        component:InfoSepakbolaComponent
      },
      {
        path:'bracket',
        component:BracketSepakbolaComponent
      },
      {
        path:'daftar',
        component:RegisterSepakbolaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepakBolaRoutingModule { }
