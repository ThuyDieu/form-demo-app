import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoFormSkuFormBuilderComponent } from './demo-form-sku-form-builder.component';

describe('DemoFormSkuFormBuilderComponent', () => {
  let component: DemoFormSkuFormBuilderComponent;
  let fixture: ComponentFixture<DemoFormSkuFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoFormSkuFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormSkuFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
