import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasuserComponent } from './comprasuser.component';

describe('ComprasuserComponent', () => {
  let component: ComprasuserComponent;
  let fixture: ComponentFixture<ComprasuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
