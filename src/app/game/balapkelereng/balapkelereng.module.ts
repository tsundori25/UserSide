import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalapkelerengRoutingModule } from './balapkelereng-routing.module';
import { BalapkelerengComponent } from './balapkelereng.component';
import { BracketComponent } from '../basket/bracket/bracket.component';
import { DaftarComponent } from '../basket/daftar/daftar.component';
import { InformasiComponent } from '../basket/informasi/informasi.component';
import { PesertaComponent } from '../basket/peserta/peserta.component';


@NgModule({
  declarations: [BalapkelerengComponent, BracketComponent, DaftarComponent, InformasiComponent, PesertaComponent],
  imports: [
    CommonModule,
    BalapkelerengRoutingModule
  ]
})
export class BalapkelerengModule { }
