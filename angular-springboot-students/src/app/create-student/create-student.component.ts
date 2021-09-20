import { StudentService } from '../student.service';
import { Student } from '../model/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  student: Student = new Student();
  submitted = false;

  studenData = new FormGroup({
    firstName: new FormControl('',[
      Validators.required]),
    lastName: new FormControl('',[
      Validators.required]),
    emailId: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")])
  })

  constructor(private studentService: StudentService,
    private router: Router) { }

  ngOnInit() {}

  newStudent(): void {
    this.submitted = false;
    this.student = new Student();
  }

  save() {
    this.studentService
    .createStudent(this.student).subscribe(data => {
      console.log(data)
      this.student = new Student();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/students']);
  }
}
