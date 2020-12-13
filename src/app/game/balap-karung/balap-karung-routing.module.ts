import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalapKarungComponent } from './balap-karung.component';
import { BracketBalapkarungComponent } from './bracket-balapkarung/bracket-balapkarung.component';
import { InfoBalapkarungComponent } from './info-balapkarung/info-balapkarung.component';
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
        component:InfoBalapkarungComponent
      },
      {
        path:'bracket',
        component:BracketBalapkarungComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalapKarungRoutingModule { }
