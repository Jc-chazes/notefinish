import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
    messages : any[];

  constructor(public navCtrl: NavController, public firebase : AngularFireDatabase) {    
    this.getDataFirebase();
  }

  getDataFirebase(){
    this.firebase.list('/HEROES/').valueChanges().subscribe(
      data=>{
        this.messages = data
      }
    )
  }

}
