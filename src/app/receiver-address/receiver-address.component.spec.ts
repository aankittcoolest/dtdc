import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverAddressComponent } from './receiver-address.component';

describe('ReceiverAddressComponent', () => {
  let component: ReceiverAddressComponent;
  let fixture: ComponentFixture<ReceiverAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
