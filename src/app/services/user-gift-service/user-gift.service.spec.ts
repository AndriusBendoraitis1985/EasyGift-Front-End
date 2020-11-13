import { TestBed } from '@angular/core/testing';

import { UserGiftService } from './user-gift.service';

describe('UserGiftService', () => {
  let service: UserGiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserGiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
