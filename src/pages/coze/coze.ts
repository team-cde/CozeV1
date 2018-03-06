import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-coze',
  templateUrl: 'coze.html'
})
export class CozePage {
  timer: number;
  maxTime: any=30;
  hidevalue: boolean;

  constructor(public navCtrl: NavController) {

  }

  StartTimer(){
      this.timer = setTimeout(x =>
        {
            if(this.maxTime <= 0) { }
            this.maxTime -= 1;

            if(this.maxTime>0){
              this.hidevalue = false;
              this.StartTimer();
            }

            else{
                this.hidevalue = true;
            }

        }, 1000);


    }

}
