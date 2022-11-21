import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CubosdetallesComponent } from './cubosdetalles.component';

describe('CubosdetallesComponent', () => {
  let component: CubosdetallesComponent;
  let fixture: ComponentFixture<CubosdetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CubosdetallesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CubosdetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
