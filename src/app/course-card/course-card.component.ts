import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  title!: string;

  @Input()
  course!: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(){
    console.log("card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }
}
