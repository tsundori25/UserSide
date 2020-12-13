import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalapKelerengComponent } from './balap-kelereng.component';
import { BracketBalapkelerengComponent } from './bracket-balapkelereng/bracket-balapkelereng.component';
import { InfoBalapkelerengComponent } from './info-balapkelereng/info-balapkelereng.component';
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
        component:InfoBalapkelerengComponent
      },
      {
        path:'bracket',
        component:BracketBalapkelerengComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalapKelerengRoutingModule { }
