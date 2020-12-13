import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolaVoliRoutingModule } from './bola-voli-routing.module';
import { BolaVoliComponent } from './bola-voli.component';
import { RegisterBolavoliComponent } from './register-bolavoli/register-bolavoli.component';
import { TeamBolavoliComponent } from './team-bolavoli/team-bolavoli.component';
import { InfoBolavoliComponent } from './info-bolavoli/info-bolavoli.component';
import { BracketBolavoliComponent } from './bracket-bolavoli/bracket-bolavoli.component';


@NgModule({
  declarations: [
    BolaVoliComponent,
    RegisterBolavoliComponent,
    TeamBolavoliComponent,
    InfoBolavoliComponent,
    BracketBolavoliComponent,
  ],
  imports: [
    CommonModule,
    BolaVoliRoutingModule
  ]
})
export class BolaVoliModule { }
