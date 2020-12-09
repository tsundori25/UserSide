import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketComponent } from '../badminton/bracket/bracket.component';
import { DaftarComponent } from '../badminton/daftar/daftar.component';
import { InformasiComponent } from '../badminton/informasi/informasi.component';
import { PesertaComponent } from '../badminton/peserta/peserta.component';
import { BalapKelerengComponent } from './balap-kelereng.component';

const routes: Routes = [
  {
    path:'',
    component:BalapKelerengComponent,
    children:[
      {
        path:'peserta',
        component:PesertaComponent
      },
      {
        path:'bracket',
        component:BracketComponent
      },
      {
        path:'informasi',
        component:InformasiComponent
      },
      {
        path:'daftar',
        component:DaftarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BalapKelerengRoutingModule { }
