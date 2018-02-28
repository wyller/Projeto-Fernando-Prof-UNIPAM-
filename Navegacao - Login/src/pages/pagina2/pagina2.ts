import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pessoa } from '../../Classes/Pessoa'

/**
 * Generated class for the Pagina2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pessoa:Pessoa;
  codigo:String;
  nome:String;

  constructor(public navCtrl: NavController, public viewCtrl : ViewController,  public navParams: NavParams) {

    this.pessoa = new Pessoa();
    this.pessoa = navParams.get('Pessoa');
    this.codigo = this.pessoa.codigo.toString();
    this.nome = this.pessoa.nome;
  }

  ionViewDidLoad() {
  }

  voltar(){
    this.viewCtrl.dismiss();
  }
}
