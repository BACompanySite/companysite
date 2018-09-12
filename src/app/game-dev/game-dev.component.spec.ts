import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDevComponent } from './game-dev.component';

describe('GameDevComponent', () => {
  let component: GameDevComponent;
  let fixture: ComponentFixture<GameDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
