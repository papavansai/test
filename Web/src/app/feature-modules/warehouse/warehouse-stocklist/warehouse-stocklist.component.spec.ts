import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseStocklistComponent } from './warehouse-stocklist.component';

describe('WarehouseStocklistComponent', () => {
  let component: WarehouseStocklistComponent;
  let fixture: ComponentFixture<WarehouseStocklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseStocklistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseStocklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
