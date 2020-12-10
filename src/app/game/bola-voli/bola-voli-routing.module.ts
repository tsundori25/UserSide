import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { BolaVoliComponent } from './bola-voli.component';
import { TeamBolavoliComponent } from './team-bolavoli/team-bolavoli.component';

const routes: Routes = [
  {
    path:'',
    component:BolaVoliComponent,
    children:[
      {
        path:'team',
        component:TeamBolavoliComponent
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
export class BolaVoliRoutingModule { }
