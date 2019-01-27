import { MembersModule } from './../members/members.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SortPipe } from './../sort.pipe';
import { SearchPipe } from './../search.pipe';
import { HomePage } from './home.page';
import { EventComponent } from './event/event.component';
import {NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgbAlertModule,
    MembersModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, EventComponent, SearchPipe, SortPipe],
  entryComponents: [EventComponent]
})
export class HomePageModule {}
