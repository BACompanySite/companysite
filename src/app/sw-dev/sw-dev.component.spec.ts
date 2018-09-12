import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwDevComponent } from './sw-dev.component';

describe('SwDevComponent', () => {
  let component: SwDevComponent;
  let fixture: ComponentFixture<SwDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
