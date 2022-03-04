import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;
  correctCredentials: boolean;

  constructor(private router: Router, public alert: AlertController) {
    this.email = '';
    this.password = '';
    this.correctCredentials = false;
   }

  ngOnInit() {
  }

  login() {
    if (this.email === 'abc' && this.password === '123') { //If the credentials are correct
      const USER_INFO =  { //Object to save data in local storage
        email: this.email,
        rol: 'admin'
      };
      localStorage.setItem('userCovidUta', JSON.stringify(USER_INFO)); //Save data in localStorage, it only receives string
      this.router.navigate(['tabs', 'tab1']);
    } else {
      alert('Incorrect password or email');
    }
  }
  async showAlert(headerA, messageA, button) {
    const addAlert = await this.alert.create({
      header: headerA,
      message: messageA,
      buttons: button
    });
    await addAlert.present();
  }
}
