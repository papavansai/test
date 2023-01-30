import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseAddUpdateProfileComponent } from './warehouse-add-update-profile.component';

describe('WarehouseAddUpdateProfileComponent', () => {
  let component: WarehouseAddUpdateProfileComponent;
  let fixture: ComponentFixture<WarehouseAddUpdateProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseAddUpdateProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseAddUpdateProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
