import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasketRoutingModule } from './basket-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { BracketComponent } from './bracket/bracket.component';
import { PeraturanComponent } from './peraturan/peraturan.component';
import { DaftarComponent } from './daftar/daftar.component';
import { BasketComponent } from './basket.component';


@NgModule({
  declarations: [BasketComponent,InformasiComponent, BracketComponent, PeraturanComponent, DaftarComponent],
  imports: [
    CommonModule,
    BasketRoutingModule
  ]
})
export class BasketModule { }
