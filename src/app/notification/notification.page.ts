import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../api/config.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  token:any;
  constructor(private configService:ConfigService) { }

  ngOnInit() {
    console.log(this.configService.token);
    this.token = this.configService.token;
  }

}
