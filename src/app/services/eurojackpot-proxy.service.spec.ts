import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { EuroJackpotProxyService } from './/eurojackpot-proxy.service';

describe('EuroJackpotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EuroJackpotProxyService]
    });
  });

  it('should be created', inject([EuroJackpotProxyService], (service: EuroJackpotProxyService) => {
    expect(service).toBeTruthy();
  }));

  it('should get users from server', async(() => {
    const service: EuroJackpotProxyService = TestBed.get(EuroJackpotProxyService);
    service.latestWinnerNumber().subscribe(
      (response) => expect(response).not.toBeNull(),
      (error) => fail(error)
    );
  }));
});
