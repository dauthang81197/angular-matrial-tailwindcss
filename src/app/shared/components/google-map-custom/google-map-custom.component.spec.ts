import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleMapCustomComponent } from './google-map-custom.component';

describe('GoogleMapCustomComponent', () => {
  let component: GoogleMapCustomComponent;
  let fixture: ComponentFixture<GoogleMapCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleMapCustomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleMapCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
