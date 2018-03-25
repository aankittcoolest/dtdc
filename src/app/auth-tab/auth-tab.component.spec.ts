import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTabComponent } from './auth-tab.component';

describe('AuthTabComponent', () => {
  let component: AuthTabComponent;
  let fixture: ComponentFixture<AuthTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
