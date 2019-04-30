import { Toasts } from './../../providers/toast';
import { HttpProvider } from './../../providers/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-cidades',
  templateUrl: 'cidades.html',
})

export class CidadesPage {
  public cidades = [];
  public bairros = [];
  public idcidades : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : HttpProvider, private toast : Toasts) {
  }

  mostrarCidade() {
    console.log('ionViewDidLoad CidadesPage');

    this.http.url = 'http://localhost:3000/cidades';
    this.http.get().subscribe(
      (data : any) => {
        this.cidades = data;
      },
      (error : any) => {
        this.toast.showToast("Não foi possivel carregar...");
      }
    );
  }

escolherBairro(){

    this.http.url = 'http://localhost:3000/bairros/' + this.idcidades;
    this.http.get().subscribe(
      (data : any ) => {
        console.log(data);
        this.bairros = data;
      }

    )
  }


}
