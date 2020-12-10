import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { MakanKerupukComponent } from './makan-kerupuk.component';
import { TeamMakankerupukComponent } from './team-makankerupuk/team-makankerupuk.component';

const routes: Routes = [
  {
    path:'',
    component:MakanKerupukComponent,
    children:[
      {
        path:'team',
        component:TeamMakankerupukComponent
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
export class MakanKerupukRoutingModule { }
