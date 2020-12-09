import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';
import { BadmintonComponent } from './badminton.component';

const routes: Routes = [
  {
    path:'',
    component:BadmintonComponent,
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
export class BadmintonRoutingModule { }
