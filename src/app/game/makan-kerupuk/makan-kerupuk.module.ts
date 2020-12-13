import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MakanKerupukRoutingModule } from './makan-kerupuk-routing.module';
import { MakanKerupukComponent } from './makan-kerupuk.component';
import { RegisterMakankerupukComponent } from './register-makankerupuk/register-makankerupuk.component';
import { TeamMakankerupukComponent } from './team-makankerupuk/team-makankerupuk.component';
import { InfoMakankerupukComponent } from './info-makankerupuk/info-makankerupuk.component';
import { BracketMakankerupukComponent } from './bracket-makankerupuk/bracket-makankerupuk.component';


@NgModule({
  declarations: [
    MakanKerupukComponent,
    RegisterMakankerupukComponent,
    TeamMakankerupukComponent,
    InfoMakankerupukComponent,
    BracketMakankerupukComponent,
  ],
  imports: [
    CommonModule,
    MakanKerupukRoutingModule
  ]
})
export class MakanKerupukModule { }
