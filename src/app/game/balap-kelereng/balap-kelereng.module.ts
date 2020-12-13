import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalapKelerengRoutingModule } from './balap-kelereng-routing.module';
import { BalapKelerengComponent } from './balap-kelereng.component';
import { RegisterBalapkelerengComponent } from './register-balapkelereng/register-balapkelereng.component';
import { TeamBalapkelerengComponent } from './team-balapkelereng/team-balapkelereng.component';
import { InfoBalapkelerengComponent } from './info-balapkelereng/info-balapkelereng.component';
import { BracketBalapkelerengComponent } from './bracket-balapkelereng/bracket-balapkelereng.component';


@NgModule({
  declarations: [
    BalapKelerengComponent,
    RegisterBalapkelerengComponent,
    TeamBalapkelerengComponent,
    InfoBalapkelerengComponent,
    BracketBalapkelerengComponent,
  ],
  imports: [
    CommonModule,
    BalapKelerengRoutingModule
  ]
})
export class BalapKelerengModule { }
