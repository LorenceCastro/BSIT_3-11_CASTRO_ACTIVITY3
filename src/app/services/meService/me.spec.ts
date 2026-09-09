import { TestBed } from '@angular/core/testing';
import { Me } from './me';

describe('Me', () => {
  let service: Me;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Me);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
