import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MakankerupukRoutingModule } from './makankerupuk-routing.module';
import { MakankerupukComponent } from './makankerupuk.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [MakankerupukComponent, BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    MakankerupukRoutingModule
  ]
})
export class MakankerupukModule { }
