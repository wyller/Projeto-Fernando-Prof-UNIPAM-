import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // Variáveis
  public loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public alertCtrl: AlertController) {

    // Faz as validações dos inputs
    this.loginForm = formBuilder.group({
      matricula: ['14036214', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), Validators.minLength(8), Validators.maxLength(8)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });

  }

  showAlert(message) {
    let alert = this.alertCtrl.create({
      title: 'Atenção',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

  onSubmit(values) {
    console.log(values.matricula.trim())
    this.navCtrl.push('ListarPage', { matricula: values.matricula.trim() })
  }

  teste(value){
    console.log(value);
    console.log(this.loginForm.get('password'));
  }
}
