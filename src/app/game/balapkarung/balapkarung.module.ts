import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalapkarungRoutingModule } from './balapkarung-routing.module';
import { BalapkarungComponent } from './balapkarung.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [BalapkarungComponent, BracketComponent,DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    BalapkarungRoutingModule
  ]
})
export class BalapkarungModule { }
