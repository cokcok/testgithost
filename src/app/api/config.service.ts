import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, LoadingController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public ip = 'http://localhost:8012/pdo/';
  constructor(private loadingController: LoadingController,private alertCtrl: AlertController) { }




/*   loadingAlert() {
    let loader = this.loadingCtrl.create({
      content: "กรุณารอสักครู่..."
    });
    //loader.present();
    return loader;
  } */

   async loadingAlert() {

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: 'กำลังโหลดข้อมูล...'
    });
    return await loading.present();
  } 

  async ChkformAlert(text:string){
    const alert = await this.alertCtrl.create({
      message: text,
      buttons: ['ตกลง']
      });
      return await alert.present();
  }


}
