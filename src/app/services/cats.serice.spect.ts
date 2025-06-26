import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CatsService } from './cats.service';

fdescribe('CatsService', () => {
  let service: CatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatsService],
    });
    service = TestBed.inject(CatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cat breeds from API on first call', () => {
    service.getBreeds().subscribe((breeds) => {
      expect(breeds.length).toBe(2);
      expect(service['catsByPage'].page).toBe(1);
    });
  });

});
