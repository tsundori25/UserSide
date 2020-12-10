import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadmintonComponent } from './badminton.component';
import { InformasiComponent } from './informasi/informasi.component';
import { TeamBadmintonComponent } from './team-badminton/team-badminton.component';

const routes: Routes = [
  {
    path:'',
    component:BadmintonComponent,
    children:[
      {
        path:'team',
        component:TeamBadmintonComponent
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
export class BadmintonRoutingModule { }
