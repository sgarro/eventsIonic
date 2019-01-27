import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { MembersComponent } from './../members/members.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


@NgModule({
    imports: [
      CommonModule,
      IonicModule,
      NgbTooltipModule
    ],
    declarations: [MembersComponent],
    exports: [MembersComponent]
  })
export class MembersModule {}