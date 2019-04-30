import { Toasts } from './../../providers/toast';
import { HttpProvider } from './../../providers/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-pageprincipal',
  templateUrl: 'pageprincipal.html',
})
export class PageprincipalPage {
  public tamanhos = [];
  public sabores = [];
  public idTamanhos = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpProvider, private toast : Toasts) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PageprincipalPage');

    this.http.url = 'http://localhost:3000/tamanhos';
    this.http.get().subscribe(
      (data : any) => {
        this.tamanhos = data;
      },
      (error : any) => {
        this.toast.showToast("Não foi possivel carregar...");
      }
    );
  }

escolherSabores(){

    this.http.url = 'http://localhost:3000/sabores/' + this.idTamanhos;
    this.http.get().subscribe(
      (data : any ) => {
        console.log(data);
        this.sabores = data;
      }

    )
  }


}
