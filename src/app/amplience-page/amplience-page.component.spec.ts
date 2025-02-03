import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmpliencePageComponent } from './amplience-page.component';

describe('AmpliencePageComponent', () => {
  let component: AmpliencePageComponent;
  let fixture: ComponentFixture<AmpliencePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmpliencePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmpliencePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
