import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SepakBolaRoutingModule } from './sepak-bola-routing.module';
import { SepakBolaComponent } from './sepak-bola.component';
import { RegisterSepakbolaComponent } from './register-sepakbola/register-sepakbola.component';
import { TeamSepakbolaComponent } from './team-sepakbola/team-sepakbola.component';
import { InfoSepakbolaComponent } from './info-sepakbola/info-sepakbola.component';
import { BracketSepakbolaComponent } from './bracket-sepakbola/bracket-sepakbola.component';

@NgModule({
  declarations: [
    SepakBolaComponent,
    RegisterSepakbolaComponent,
    TeamSepakbolaComponent,
    InfoSepakbolaComponent,
    BracketSepakbolaComponent,
  ],
  imports: [
    CommonModule,
    SepakBolaRoutingModule
  ]
})
export class SepakBolaModule { }
