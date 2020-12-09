import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakanKerupukRoutingModule } from './makan-kerupuk-routing.module';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';
import { MakanKerupukComponent } from './makan-kerupuk.component';


@NgModule({
  declarations: [
    MakanKerupukComponent,
    BracketComponent, 
    DaftarComponent, 
    InformasiComponent, 
    PesertaComponent
  ],
  imports: [
    CommonModule,
    MakanKerupukRoutingModule
  ]
})
export class MakanKerupukModule { }
