import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKelerengRoutingModule } from './balap-kelereng-routing.module';
import { InformasiComponent } from './informasi/informasi.component';
import { BalapKelerengComponent } from './balap-kelereng.component';
import { RegisterBalapkelerengComponent } from './register-balapkelereng/register-balapkelereng.component';
import { TeamBalapkelerengComponent } from './team-balapkelereng/team-balapkelereng.component';


@NgModule({
  declarations: [
    BalapKelerengComponent,
    InformasiComponent,
    RegisterBalapkelerengComponent,
    TeamBalapkelerengComponent,
  ],
  imports: [
    CommonModule,
    BalapKelerengRoutingModule
  ]
})
export class BalapKelerengModule { }
