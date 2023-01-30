import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAddUpdateProductComponent } from './warehouse-add-update-product.component';

describe('WarehouseAddUpdateProductComponent', () => {
  let component: WarehouseAddUpdateProductComponent;
  let fixture: ComponentFixture<WarehouseAddUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseAddUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseAddUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
