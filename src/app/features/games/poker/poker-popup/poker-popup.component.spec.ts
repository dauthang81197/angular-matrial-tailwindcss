import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokerPopupComponent } from './poker-popup.component';

describe('PokerPopupComponent', () => {
  let component: PokerPopupComponent;
  let fixture: ComponentFixture<PokerPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokerPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokerPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
