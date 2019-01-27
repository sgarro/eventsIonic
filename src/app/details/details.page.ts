import { NavController } from '@ionic/angular';
import { NavService } from './../providers/nav.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.sass'],
})
export class DetailsPage implements OnInit {
  event: any;
  dateTime: Date;
  constructor(private navService: NavService, private navCtrl: NavController) {
   
   }
  ngOnInit() {
    this.event = this.navService.object;
    if(!this.event) this.navCtrl.navigateRoot('/home')
    this.dateTime = this.formatData(this.event.dateTime)
  }
  
  formatData(data : string): Date {
    const tmp = data.split(' ');
    const dateTime = tmp[0].split('-').concat(tmp[1].split(':'));
    return new Date(Number(dateTime[2]), Number(dateTime[1])-1, Number(dateTime[0]), Number(dateTime[3]), Number(dateTime[4]), Number(dateTime[5]))
  }

}
