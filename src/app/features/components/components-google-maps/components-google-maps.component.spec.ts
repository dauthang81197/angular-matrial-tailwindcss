import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsGoogleMapsComponent } from './components-google-maps.component';

describe('ComponentsGoogleMapsComponent', () => {
  let component: ComponentsGoogleMapsComponent;
  let fixture: ComponentFixture<ComponentsGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsGoogleMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
