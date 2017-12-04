import {Component} from '@angular/core';
import {OrdersService} from "../../services/orders";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [OrdersService]
})
export class HomePage {
  pet: string = "puppies";
  ordersService: OrdersService;

  constructor(orderService: OrdersService) {
    this.ordersService = orderService;
  }

  ngOnInit() {
    this.subscribeData();
  }

  changeSegment() {
    this.subscribeData();
  }

  subscribeData() {
    const subscription = Observable.fromPromise(this.ordersService.loadOrders(this.pet));

    subscription.subscribe(data => {
      console.log(data);
    })
  }
}
