import { TestBed, inject } from '@angular/core/testing';


import { EuroJackPotDataService } from './euro-jack-pot-data.service';

describe('EuroJackPotDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuroJackPotDataService]
    });
  });

  it('should be created', inject([EuroJackPotDataService], (service: EuroJackPotDataService) => {
    expect(service).toBeTruthy();
  }));
});
