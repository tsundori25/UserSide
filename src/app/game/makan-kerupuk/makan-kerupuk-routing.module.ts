import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketMakankerupukComponent } from './bracket-makankerupuk/bracket-makankerupuk.component';
import { InfoMakankerupukComponent } from './info-makankerupuk/info-makankerupuk.component';
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
        component:InfoMakankerupukComponent
      },
      {
        path:'bracket',
        component:BracketMakankerupukComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakanKerupukRoutingModule { }
