import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakBolaRoutingModule } from './sepak-bola-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { SepakBolaComponent } from './sepak-bola.component';
import { RegisterSepakbolaComponent } from './register-sepakbola/register-sepakbola.component';
import { TeamSepakbolaComponent } from './team-sepakbola/team-sepakbola.component';

@NgModule({
  declarations: [
    SepakBolaComponent,
    InformasiComponent,
    RegisterSepakbolaComponent,
    TeamSepakbolaComponent,
  ],
  imports: [
    CommonModule,
    SepakBolaRoutingModule
  ]
})
export class SepakBolaModule { }
