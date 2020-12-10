import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKarungRoutingModule } from './balap-karung-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { BalapKarungComponent } from './balap-karung.component';
import { RegisterBalapkarungComponent } from './register-balapkarung/register-balapkarung.component';
import { TeamBalapkarungComponent } from './team-balapkarung/team-balapkarung.component';



@NgModule({
  declarations: [
    BalapKarungComponent,
    InformasiComponent,
    RegisterBalapkarungComponent,
    TeamBalapkarungComponent,
  ],
  imports: [
    CommonModule,
    BalapKarungRoutingModule
  ]
})
export class BalapKarungModule { }
