import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadmintonRoutingModule } from './badminton-routing.module';
import { BadmintonComponent } from './badminton.component';
import { TeamBadmintonComponent } from './team-badminton/team-badminton.component';
import { RegisterBadmintonComponent } from './register-badminton/register-badminton.component';
import { BracketBadmintonComponent } from './bracket-badminton/bracket-badminton.component';

@NgModule({
  declarations: [
    BadmintonComponent,
    TeamBadmintonComponent,
    RegisterBadmintonComponent,
    BracketBadmintonComponent,
  ],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
