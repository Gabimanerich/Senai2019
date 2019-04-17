import { HomePage } from './../home/home';
import { cadastrar } from './../../providers/cadastrar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public userName: any;
  public email: any;
  public password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cadastrar : cadastrar) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  public cadastro(){
    this.cadastrar.cadastrando(this.userName,this.email, this.password).subscribe(
      (data: any) => {
        this.navCtrl.push(HomePage)
      },
      (error : any) => {
        console.log("não foi possivel cadastrar")
      }
    )
  }

}
