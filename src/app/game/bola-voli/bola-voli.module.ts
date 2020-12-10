import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BolaVoliRoutingModule } from './bola-voli-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { BolaVoliComponent } from './bola-voli.component';
import { RegisterBolavoliComponent } from './register-bolavoli/register-bolavoli.component';
import { TeamBolavoliComponent } from './team-bolavoli/team-bolavoli.component';


@NgModule({
  declarations: [
    BolaVoliComponent,
    InformasiComponent,
    RegisterBolavoliComponent,
    TeamBolavoliComponent,
  ],
  imports: [
    CommonModule,
    BolaVoliRoutingModule
  ]
})
export class BolaVoliModule { }
