import { TestBed, inject } from '@angular/core/testing';
import { EuroJackPotService } from './eurojackpot.service';
import { EuroJackpotProxyServiceFake } from './eurojacpot-proxy.service.fake.spec';
import { EuroJackpotProxyService } from './eurojackpot-proxy.service';
import { EuroJackPot } from '../models/euro-jack-pot';



describe('EuroJackPotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: EuroJackPotService,
          useClass: EuroJackPotService,
          deps: [
            {
              provide: EuroJackpotProxyService,
              useClass: EuroJackpotProxyServiceFake
            }
          ]
        }]
    });
  });

  xit('should be created', inject([EuroJackPotService], (service: EuroJackPotService) => {
    expect(service).toBeTruthy();
  }));

  xit('should get euroJackpot', () => {
    const service: EuroJackPotService = TestBed.get(EuroJackPotService);
    service.getEuroJackPotData().subscribe( (response: EuroJackPot) => {
      expect(response.currency).toEqual('EUR');
      expect(response.euroNumbers).toBeDefined();
    });
  });
});
