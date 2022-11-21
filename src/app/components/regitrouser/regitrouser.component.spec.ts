import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegitrouserComponent } from './regitrouser.component';

describe('RegitrouserComponent', () => {
  let component: RegitrouserComponent;
  let fixture: ComponentFixture<RegitrouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegitrouserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegitrouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
