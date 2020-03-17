import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LookStoreComponent } from './look-store.component';

describe('LookStoreComponent', () => {
  let component: LookStoreComponent;
  let fixture: ComponentFixture<LookStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LookStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
