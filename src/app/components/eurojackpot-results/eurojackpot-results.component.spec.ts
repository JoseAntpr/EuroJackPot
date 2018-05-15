import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuroJackPotResultsComponent } from './eurojackpot-results.component';
import { EuroJackPotService } from '../../services/eurojackpot.service';
import { EuroJackpotProxyService } from '../../services/eurojackpot-proxy.service';
import { EuroJackpotProxyServiceFake } from '../../services/eurojacpot-proxy.service.fake.spec';
import { By } from '@angular/platform-browser';

describe('EuroJackPotResultsComponent', () => {
  let component: EuroJackPotResultsComponent;
  let fixture: ComponentFixture<EuroJackPotResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuroJackPotResultsComponent ],
      providers: [ EuroJackPotService,
        {
          provide: EuroJackpotProxyService,
          useClass: EuroJackpotProxyServiceFake
        }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuroJackPotResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('', () => {
    component.ngOnInit();
  });

  it('should have 7 ball numbers', () => {
    const balls = fixture.debugElement.nativeElement.querySelectorAll('.winnner-number');
    expect(balls.length).toEqual(7);
  });
});
