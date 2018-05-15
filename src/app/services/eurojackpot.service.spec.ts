import { TestBed, inject } from '@angular/core/testing';
import { EuroJackPotService } from './eurojackpot.service';



describe('EuroJackPotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EuroJackPotService]
    });
  });

  it('should be created', inject([EuroJackPotService], (service: EuroJackPotService) => {
    expect(service).toBeTruthy();
  }));
});
