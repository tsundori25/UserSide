import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketSepaktakrawComponent } from './bracket-sepaktakraw/bracket-sepaktakraw.component';
import { InfoSepaktakrawComponent } from './info-sepaktakraw/info-sepaktakraw.component';
import { SepakTakrawComponent } from './sepak-takraw.component';
import { TeamSepaktakrawComponent } from './team-sepaktakraw/team-sepaktakraw.component';

const routes: Routes = [
  {
    path:'',
    component:SepakTakrawComponent,
    children:[
      {
        path:'team',
        component:TeamSepaktakrawComponent
      },
      {
        path:'informasi',
        component:InfoSepaktakrawComponent
      },
      {
        path:'bracket',
        component:BracketSepaktakrawComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepakTakrawRoutingModule { }
