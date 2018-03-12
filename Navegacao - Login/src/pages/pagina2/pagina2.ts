import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Pessoa } from '../../Classes/Pessoa'
import { ListaProvider } from '../../providers/lista/lista';

@IonicPage()
@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {


  constructor(public navCtrl: NavController, 
    public viewCtrl : ViewController,  
    public navParams: NavParams,
    public lista : ListaProvider
  ) 
  {
    lista.getDisciplina().then((res) => {
      console.log('capeta:', res)
    })
  }

  ionViewDidLoad() {
   
  }

  voltar(){
    this.viewCtrl.dismiss();
  }
}
