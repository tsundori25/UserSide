import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKarungRoutingModule } from './balap-karung-routing.module';
import { BalapKarungComponent } from './balap-karung.component';
import { RegisterBalapkarungComponent } from './register-balapkarung/register-balapkarung.component';
import { TeamBalapkarungComponent } from './team-balapkarung/team-balapkarung.component';
import { InfoBalapkarungComponent } from './info-balapkarung/info-balapkarung.component';
import { BracketBalapkarungComponent } from './bracket-balapkarung/bracket-balapkarung.component';

@NgModule({
  declarations: [
    BalapKarungComponent,
    RegisterBalapkarungComponent,
    TeamBalapkarungComponent,
    InfoBalapkarungComponent,
    BracketBalapkarungComponent,
  ],
  imports: [
    CommonModule,
    BalapKarungRoutingModule
  ]
})
export class BalapKarungModule { }
