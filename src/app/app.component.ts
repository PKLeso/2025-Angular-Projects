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

  /* Angular pipes
  * An Angular pipe is a feature in Angular used to transform data before it
  * is displayed in the view (template). Pipes are commonly used in interpolation
  * or binding expressions to format or modify values in a readable or desired way.
  * */
  startDate = new Date(2025, 5, 22);
  title = COURSES[0].description;
  price = 9.9952233;
  rate = 0.67;

coreCourse = COURSES[0];
rxjsCourse = COURSES[1];
ngrxCourse = COURSES[2];

// Optimize the above with less redundancy
  courses = [...COURSES]; //COURSES; Make a copy of the Courses list with the spread operator ...Courses

  onCourseSelected(course: Course) {
    console.log('Course selected... App ts:: ', course);
  }

  // In special cases where we don't have any unique identifier for our @for tracking
  // That is when you will need to create one
  // In HTML instead of using 'course.id' -> 'courseTracker'
  // It is mandatory with the new @for -> to optimally only change parts that need to change
  //   instead of re-rendering the whole list of the array - it has performance benefit.
  // Not ideally recommended, but to avoid compilation error you can track using the $index
  // 'track $index'
  courseTracker(index: number, course: Course) {
    return course.id;
  }
}
