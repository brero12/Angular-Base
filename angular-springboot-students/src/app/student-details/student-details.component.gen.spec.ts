import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { StudentDetailsComponent } from './student-details.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;

  beforeEach(() => {
    const studentServiceStub = () => ({
      getStudent: id => ({ subscribe: f => f({}) })
    });
    const routerStub = () => ({ navigate: array => ({}) });
    const activatedRouteStub = () => ({ snapshot: { params: {} } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [StudentDetailsComponent],
      providers: [
        { provide: StudentService, useFactory: studentServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const studentServiceStub: StudentService = fixture.debugElement.injector.get(
        StudentService
      );
      spyOn(studentServiceStub, 'getStudent').and.callThrough();
      component.ngOnInit();
      expect(studentServiceStub.getStudent).toHaveBeenCalled();
    });
  });

  describe('list', () => {
    it('makes expected calls', () => {
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      component.list();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
