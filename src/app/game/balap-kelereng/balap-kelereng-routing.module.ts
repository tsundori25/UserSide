import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { BalapKelerengComponent } from './balap-kelereng.component';
import { TeamBalapkelerengComponent } from './team-balapkelereng/team-balapkelereng.component';

const routes: Routes = [
  {
    path:'',
    component:BalapKelerengComponent,
    children:[
      {
        path:'team',
        component:TeamBalapkelerengComponent
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
export class BalapKelerengRoutingModule { }
