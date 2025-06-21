import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from "./model/course";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {

coreCourse = COURSES[0];
rxjsCourse = COURSES[1];
ngrxCourse = COURSES[2];

// Optimize the above with less redundancy
  courses = COURSES;

  onCourseSelected(course: Course) {
    console.log('Course selected... App ts:: ', course);
  }
}
