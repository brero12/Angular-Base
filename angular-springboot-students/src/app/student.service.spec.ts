import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { StudentService } from './student.service';

describe('StudentService', () => {
  let service: StudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentService]
    });
    service = TestBed.get(StudentService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getStudentsList', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getStudentsList().subscribe(res => {
        expect(res).toEqual(null);
      });
    });
  });
});
