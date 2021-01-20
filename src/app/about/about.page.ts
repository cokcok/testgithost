import { Component, OnInit } from '@angular/core';
import { TestdataService } from '../api/testdata.service';
import { Subscription } from 'rxjs';
import { data } from '../model/data';
import {ConfigService} from '../api/config.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  data = [];
  sub: Subscription;
  page = 0;maxpadding = 0;limit = 50;
  constructor(private dataService: TestdataService,private configService :ConfigService) { }
 
  ngOnInit() {
    this.loaddata(this.page);
    
  }

  loaddata(padding: number, infiniteScroll?){
    let datalimit;
    this.sub = this.dataService.getCourse(padding,this.limit).subscribe(
      (data) => {
        if (data !== null){
          //console.log(data.data_detail);
          this.maxpadding = data['maxpadding'];
           datalimit = data['limit'];
          // console.log(this.data, this.maxpadding);
           for (let i = 0; i < datalimit; i++ ) {
             //console.log(data['data_detail'][i]['id']);
            this.data.push({
               'id': data['data_detail'][i]['id'],
               'name': data['data_detail'][i]['name'],
               'createdate': data['data_detail'][i]['createdate'],
               'formatdate' : data['data_detail'][i]['formatdate'],
             });
           }
          /*  data['data_detail'].forEach(function(value){
             //console.log(value['id']);
            // dataarray.push
             dataarray.push({
               'id': value['id'],
               'name': value['name'],
               'createdate': value['createdate'],
               'formatdate' : value['formatdate'],
             });
           }); */
          // this.data.push(dataarray);
         //  console.log(dataarray);
           if (infiniteScroll) {
             infiniteScroll.target.complete();
           }
        }
      }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  doInfinite(infiniteScroll) {
    this.page++;
    console.log(this.page,this.maxpadding);
   /*  setTimeout(() => {
      this.loaddata(this.page * this.limit , infiniteScroll);     
    },1000); */
    this.loaddata(this.page * this.limit , infiniteScroll); 
    if (this.page === this.maxpadding) {
      infiniteScroll.target.disabled = true;
      this.configService.ChkformAlert('ไม่พบข้อมูลแล้ว');
    }
   

  }
}
