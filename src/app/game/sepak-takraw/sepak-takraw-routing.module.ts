import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
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
        component:InformasiComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepakTakrawRoutingModule { }
