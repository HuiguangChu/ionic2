import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    //call the service to load the data
  }

  changeSegment() {
    console.log(this.pet);
  }
}
