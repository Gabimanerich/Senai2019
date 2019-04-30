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

  public sabor: any;
  public preco: any;
  public idTamanho : number = 0 ;
  public listaTamanhos : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private cadastrar : cadastrar,  private http : HttpProvider, private toast : Toasts ) {
    // Ao abrir a tela de cadastro de sabores chama esta função "buscarTamanho();"
    this.buscarTamanho();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');

  }

  public cadastro(){
    this.cadastrar.cadastrando(this.sabor, this.preco, this.idTamanho).subscribe(
      (data: any) => {

      },
      (error : any) => {
        console.log("não foi possivel cadastrar")
      }
    )
  }

  public buscarTamanho(){
    this.cadastrar.getTamanho().subscribe(
      (data: any) => {
        this.listaTamanhos = data
      },
      (error : any) => {
        console.log("não foi possivel cadastrar")
      }
    )
  }


}
