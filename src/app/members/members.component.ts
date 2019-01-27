import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: 'members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit {
  @Input() members: any;
  @Input() index: number;
  @Input() others: string;
  constructor() { }

  ngOnInit() {
  }

  

}
