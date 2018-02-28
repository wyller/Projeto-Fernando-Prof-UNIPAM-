import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Pessoa } from '../../Classes/Pessoa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pessoa:Pessoa;
  constructor(public navCtrl: NavController,private alertCtrl: AlertController, public modalCtrl : ModalController) {
  }

  irParaPagina(pagina)
  {
    let pessoa =  new Pessoa();
    pessoa.codigo = 1;
    pessoa.nome = 'teste nome de classe';
    this.navCtrl.push(pagina, {Pessoa : pessoa});
  }

  irParaPagina2(){
    this.pessoa = new Pessoa();
    this.pessoa.codigo = 1;
    this.pessoa.nome = "Teste nome de classe";
    this.navCtrl.push("Pagina2Page",{pessoa : this.pessoa});
  }

  irParaPagina4(){
    let modal = this.modalCtrl.create('Pagina4Page');
    modal.present();
  }

  alerta(mensagem){
    let alert = this.alertCtrl.create({
      title: 'Teste',
      subTitle: mensagem,
      buttons: ['Dismiss']
    });
    alert.present();
  }

}