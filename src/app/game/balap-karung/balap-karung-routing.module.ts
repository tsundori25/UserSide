import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { BalapKarungComponent } from './balap-karung.component';
import { TeamBalapkarungComponent } from './team-balapkarung/team-balapkarung.component';

const routes: Routes = [
  {
    path:'',
    component:BalapKarungComponent,
    children:[
      {
        path:'team',
        component:TeamBalapkarungComponent
      },
      {
        path:'informasi',
        component:InformasiComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalapKarungRoutingModule { }
