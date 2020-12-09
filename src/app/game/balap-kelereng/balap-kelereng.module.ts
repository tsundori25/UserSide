import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalapKelerengRoutingModule } from './balap-kelereng-routing.module';
import { BracketComponent } from './bracket/bracket.component';
import { DaftarComponent } from './daftar/daftar.component';
import { InformasiComponent } from './informasi/informasi.component';
import { PesertaComponent } from './peserta/peserta.component';
import { BalapKelerengComponent } from './balap-kelereng.component';


@NgModule({
  declarations: [
    BalapKelerengComponent,
    BracketComponent, 
    DaftarComponent, 
    InformasiComponent, 
    PesertaComponent
  ],
  imports: [
    CommonModule,
    BalapKelerengRoutingModule
  ]
})
export class BalapKelerengModule { }
