import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BolaVoliComponent } from './bola-voli.component';
import { BracketBolavoliComponent } from './bracket-bolavoli/bracket-bolavoli.component';
import { InfoBolavoliComponent } from './info-bolavoli/info-bolavoli.component';
import { RegisterBolavoliComponent } from './register-bolavoli/register-bolavoli.component';
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
        component:InfoBolavoliComponent
      },
      {
        path:'bracket',
        component:BracketBolavoliComponent
      },
      {
        path:'daftar',
        component:RegisterBolavoliComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BolaVoliRoutingModule { }
