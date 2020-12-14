import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasketBallComponent } from './basket-ball.component';
import { BracketBasketballComponent } from './bracket-basketball/bracket-basketball.component';
import { InfoBasketballComponent } from './info-basketball/info-basketball.component';
import { RegisterBasketballComponent } from './register-basketball/register-basketball.component';
import { TeamBasketballComponent } from './team-basketball/team-basketball.component';

const routes: Routes = [
  {
    path:'',
    component:BasketBallComponent,
    children:[
      {
        path:'team',
        component:TeamBasketballComponent
      },
      {
        path:'informasi',
        component:InfoBasketballComponent
      },
      {
        path:'bracket',
        component:BracketBasketballComponent
      },
      {
        path:'daftar',
        component:RegisterBasketballComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketBallRoutingModule { }
