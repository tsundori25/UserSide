import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SepakbolaRoutingModule } from './sepakbola-routing.module';
import { SepakbolaComponent } from './sepakbola.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [SepakbolaComponent, BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    SepakbolaRoutingModule
  ]
})
export class SepakbolaModule { }
