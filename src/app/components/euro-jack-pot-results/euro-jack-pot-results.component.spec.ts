import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroJackPotResultsComponent } from './euro-jack-pot-results.component';

describe('EuroJackPotResultsComponent', () => {
  let component: EuroJackPotResultsComponent;
  let fixture: ComponentFixture<EuroJackPotResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroJackPotResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroJackPotResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
