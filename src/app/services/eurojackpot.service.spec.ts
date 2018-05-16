import { TestBed, inject } from '@angular/core/testing';

// Services
import { EuroJackPotService } from './eurojackpot.service';
import { EuroJackpotProxyServiceFake } from './eurojacpot-proxy.service.fake.spec';
import { EuroJackpotProxyService } from './eurojackpot-proxy.service';

// Model
import { EuroJackPot } from '../models/euro-jack-pot';



describe('EuroJackPotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EuroJackPotService,
        {
          provide: EuroJackpotProxyService,
          useClass: EuroJackpotProxyServiceFake
        }]
    });
  });

  it('should be created', inject([EuroJackPotService], (service: EuroJackPotService) => {
    expect(service).toBeTruthy();
  }));

  /* Test if EuroJackpot service get the correct data
  In this test I use a fakeService to avoid the async methods */
  it('should get euroJackpot', () => {
    const service: EuroJackPotService = TestBed.get(EuroJackPotService);
    service.getEuroJackPotData().subscribe( (response: EuroJackPot) => {
      expect(response.currency).toEqual('EUR');
      expect(response.euroNumbers).toBeDefined();
    });
  });
});
