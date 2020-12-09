import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadmintonRoutingModule } from './badminton-routing.module';
import { BadmintonComponent } from './badminton.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';

@NgModule({
  declarations: [BadmintonComponent, BracketComponent, DaftarComponent,InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
