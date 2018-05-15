import { TestBed, inject, async } from '@angular/core/testing';

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

  it('should get users', async(() => {
    const service: EuroJackpotService = TestBed.get(EuroJackpotService);
    service.latestWinnerNumber().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
