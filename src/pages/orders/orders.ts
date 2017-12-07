import {Component} from '@angular/core';
import {OrdersService} from "../../services/orders";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'orders.html',
  providers: [OrdersService]
})
export class OrdersPage {
  orderType: string = "new";
  ordersService: OrdersService;
  orders: object;

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
    const subscription = Observable.fromPromise(this.ordersService.loadOrders(this.orderType));

    subscription.subscribe(data => {
      this.orders = data;
    })
  }
}
