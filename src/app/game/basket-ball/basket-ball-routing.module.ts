import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { BasketBallComponent } from './basket-ball.component';
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
        component:InformasiComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasketBallRoutingModule { }
