import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakanKerupukRoutingModule } from './makan-kerupuk-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { MakanKerupukComponent } from './makan-kerupuk.component';
import { RegisterMakankerupukComponent } from './register-makankerupuk/register-makankerupuk.component';
import { TeamMakankerupukComponent } from './team-makankerupuk/team-makankerupuk.component';


@NgModule({
  declarations: [
    MakanKerupukComponent,
    InformasiComponent,
    RegisterMakankerupukComponent,
    TeamMakankerupukComponent,
  ],
  imports: [
    CommonModule,
    MakanKerupukRoutingModule
  ]
})
export class MakanKerupukModule { }
