import { CadastroPage } from './../cadastro/cadastro';
import { Logon } from './../../providers/logon';
import { PageprincipalPage } from '../pageprincipal/pageprincipal';
import { Component } from '@angular/core';
import { NavController, Toast } from 'ionic-angular';
//import {Messages} from '../../providers/messages';
import {Toasts } from '../../providers/toast';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  //public listaAlunos = [];
  //public exibirLista : boolean = true;
  public username:any;
  public password:any;

 constructor(public navCtrl: NavController, private toast : Toasts, private logon : Logon) {
  }

  public showToast(){
    this.toast.showToast ;
 }

 public showToastlogin(){
  this.toast.showToast("Usuario ou senha Invalido", 5000);
}

  public login(){
        this.logon.login(this.username, this.password).subscribe(
          (data : any) => {
            this.navCtrl.push(PageprincipalPage)
          },
          (error : any) => {
            this.showToastlogin()
          }
        );   
 
  }
  
  public accessPageCreate (){
    this.navCtrl.push(CadastroPage);
  }


 // constructor(public navCtrl: NavController, private messages : Messages) {
  //}
  //public showMessage(){
   // this.messages.loadingShow
  //}
  
 // public esconderAlunos(){
 //   this.exibirLista = !this.exibirLista;
 // }

//  public limparLista(){
//    this.listaAlunos = [];
//  }
 // public addAlunos(){
 //   this.listaAlunos.push({nome : "Aluno A"});
  //  this.listaAlunos.push({nome : "Aluno B"});
  //  this.listaAlunos.push({nome : "Aluno C"});
  //  this.listaAlunos.push({nome : "Aluno D"});
 //   this.listaAlunos.push({nome : "Aluno E"});
 // }

}
