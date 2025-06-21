import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../model/course";

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

@Input({
  required: true
})
course: Course;

@Input({ required: true })
index: number;

// Binding for the old ngFor
  @Input()
  cardIndex: number;

// If the name differs from your child's component, you need to pass it as a parameter to the decorator.
@Output('courseSelected')
courseEmitter: EventEmitter<Course> = new EventEmitter<Course>();

// Else pass the same name as the child's component.
@Output()
courseSelected: EventEmitter<Course> = new EventEmitter<Course>();

constructor() { }

  onCourseViewed() {
  console.log('Course card clicked...');
  this.courseEmitter.emit(this.course);
  this.courseSelected.emit(this.course);
}

}
