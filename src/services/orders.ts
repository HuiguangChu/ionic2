import {Injectable} from '@angular/core';
import * as wilddog from 'wilddog';
import * as Promise from 'bluebird';

const wilddogConfig = {
  syncURL: "https://minimenu2017.wilddogio.com"
};
wilddog.initializeApp(wilddogConfig);
const ordersRef = wilddog.sync().ref('/consoleData/categories');

@Injectable()
export class OrdersService {
  loadOrders(filter) {
    return new Promise(function (resolve, reject) {
      ordersRef.on('value', function (snapshot) {
        console.log(snapshot.val());
          resolve(snapshot.val());
        },
        function (error) {
          reject(error);
        });
    })
  }
}
