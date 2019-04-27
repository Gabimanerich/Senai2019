import { HomePage } from './../home/home';
import { cadastrar } from './../../providers/cadastrar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpProvider } from './../../providers/http';
import { Toasts } from './../../providers/toast';
@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  public userName: any;
  public email: any;
  public password:any;
  public cidades = [];
  public bairros = [];
  public idcidades : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private cadastrar : cadastrar,  private http : HttpProvider, private toast : Toasts ) {
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

  public Mostrarcidades(){
    this.http.url = 'http://localhost:3000/cidades';
    this.http.get().subscribe(
      (data : any) => {
        this.cidades = data;
        console.log(this.cidades);
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
        this.bairros = data;
        console.log(this.bairros);
      },
      (error : any ) => {
        console.log(error);
      }

    )
  }
}
