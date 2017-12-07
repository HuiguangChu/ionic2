import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { TablesPage } from '../tables/tables';
import { OrdersPage } from '../orders/orders';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = OrdersPage;
  tab2Root = TablesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
