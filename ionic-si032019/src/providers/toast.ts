import { Injectable } from '@angular/core';
import { ToastController, Toast } from 'ionic-angular';


@Injectable()
export class Toasts {

    private toasting : Toast = null;

    constructor(public toastCtrl: ToastController) {}
    
    public showToast(param1: string, param2: number = 5000) {
        const toast = this.toastCtrl.create({
            message: param1,
            duration : param2
        }).present();
      }
}