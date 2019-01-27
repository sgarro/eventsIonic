import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavService } from 'src/app/providers/nav.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.sass']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  @Input() when: string;
  private dateTime: Date;
  constructor(public navCtrl: NavController, private navService: NavService) { 
  }

  ngOnInit() {
    this.dateTime = this.formatData(this.event.dateTime);
  }
  goToEvent(){
    this.navService.object =  this.event;
    this.navCtrl.navigateForward('details', );
  }

  formatData(data : string): Date {
    const tmp = data.split(' ');
    const dateTime = tmp[0].split('-').concat(tmp[1].split(':'));
    return new Date(Number(dateTime[2]), Number(dateTime[1])-1, Number(dateTime[0]), Number(dateTime[3]), Number(dateTime[4]), Number(dateTime[5]))
  }

}
