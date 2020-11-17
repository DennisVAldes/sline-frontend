import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DondeDenunciarComponent } from './donde-denunciar.component';

describe('DondeDenunciarComponent', () => {
  let component: DondeDenunciarComponent;
  let fixture: ComponentFixture<DondeDenunciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DondeDenunciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DondeDenunciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
