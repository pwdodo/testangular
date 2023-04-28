import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukCariComponent } from './produk-cari.component';

describe('ProdukCariComponent', () => {
  let component: ProdukCariComponent;
  let fixture: ComponentFixture<ProdukCariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukCariComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdukCariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
