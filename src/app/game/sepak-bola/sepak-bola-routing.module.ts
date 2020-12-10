import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
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
        component:InformasiComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SepakBolaRoutingModule { }
