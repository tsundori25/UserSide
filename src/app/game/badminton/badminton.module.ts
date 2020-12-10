import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadmintonRoutingModule } from './badminton-routing.module';
import { BadmintonComponent } from './badminton.component';
import { InformasiComponent } from './informasi/informasi.component';
import { TeamBadmintonComponent } from './team-badminton/team-badminton.component';
import { RegisterBadmintonComponent } from './register-badminton/register-badminton.component';


@NgModule({
  declarations: [
    BadmintonComponent,
    InformasiComponent,
    TeamBadmintonComponent,
    RegisterBadmintonComponent,
  ],
  imports: [
    CommonModule,
    BadmintonRoutingModule
  ]
})
export class BadmintonModule { }
