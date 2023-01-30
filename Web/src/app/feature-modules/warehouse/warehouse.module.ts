import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard.component';
import { WarehouseStocklistComponent } from './warehouse-stocklist/warehouse-stocklist.component';
import { WarehouseAddUpdateProductComponent } from './warehouse-add-update-product/warehouse-add-update-product.component';
import { WarehouseAddUpdateProfileComponent } from './warehouse-add-update-profile/warehouse-add-update-profile.component';


@NgModule({
  declarations: [
    WarehouseDashboardComponent,
    WarehouseStocklistComponent,
    WarehouseAddUpdateProductComponent,
    WarehouseAddUpdateProfileComponent
  ],
  imports: [
    CommonModule,
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
