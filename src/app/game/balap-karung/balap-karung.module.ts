import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalapKarungRoutingModule } from './balap-karung-routing.module';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';
import { BalapKarungComponent } from './balap-karung.component';


@NgModule({
  declarations: [
    BalapKarungComponent,
    BracketComponent, 
    DaftarComponent, 
    InformasiComponent, 
    PesertaComponent],
  imports: [
    CommonModule,
    BalapKarungRoutingModule
  ]
})
export class BalapKarungModule { }
