import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketBallRoutingModule } from './basket-ball-routing.module';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';


@NgModule({
  declarations: [BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    BasketBallRoutingModule
  ]
})
export class BasketBallModule { }
