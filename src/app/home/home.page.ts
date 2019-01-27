import { NavService } from '../providers/nav.service';

// import { HTT, HttpProvider } from './../providers/http/http';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpProvider } from '../providers/http/http';

interface Alert {
  type: string;
  message: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.sass'],
})
export class HomePage {
  events: any;
  search: string;
  error: Alert;
  constructor(private api: HttpProvider, private navCtrl: NavController, ){
    this.api.get('api/events.json').subscribe(res=>{
      if (res == null || res.length === 0) {
        this.error = {type: 'warning', message: 'No events'};
      } else {
        this.events = (res);
      } 
    },
    (err) => {
      this.error = {type: 'danger', message: 'Network error'}}
    );
  }
 
  

}
