import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadmintonRoutingModule } from './badminton-routing.module';
import { BadmintonComponent } from './badminton.component';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';

@NgModule({
  declarations: [
    BadmintonComponent,
    BracketComponent,
    DaftarComponent,
    InformasiComponent,
    PesertaComponent
  ],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
