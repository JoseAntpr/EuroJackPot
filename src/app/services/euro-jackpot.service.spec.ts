import { TestBed, inject } from '@angular/core/testing';

import { EuroJackpotService } from './euro-jackpot.service';

describe('EuroJackpotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuroJackpotService]
    });
  });

  it('should be created', inject([EuroJackpotService], (service: EuroJackpotService) => {
    expect(service).toBeTruthy();
  }));
});
