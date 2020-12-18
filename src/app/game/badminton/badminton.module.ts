import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadmintonRoutingModule } from './badminton-routing.module';
import { BadmintonComponent } from './badminton.component';
import { TeamComponent } from './team/team.component';
import { BracketComponent } from './bracket/bracket.component';


@NgModule({
  declarations: [
    BadmintonComponent,
    TeamComponent,
    BracketComponent
  ],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
