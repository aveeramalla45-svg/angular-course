import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input()
  title!: string;

  @Input()
  indexDisplay!: number;

  @Input()
  course!: Course;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed(){
    console.log("card component - button clicked...");

    this.courseEmitter.emit(this.course);
  }

  isImageVisible()
  {
return this.course && this.course.iconUrl;

  }

  cardClasses()
  {
    return { advanced: this.course.category == 'ADVANCED' };
  }

  cardStyles()
  {
    return { 'text-decoration': 'underline' };
  }
}
