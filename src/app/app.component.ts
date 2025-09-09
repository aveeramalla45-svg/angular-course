import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import {COURSES} from '../db-data';
import { Course } from './model/course';
  import { NgModule } from '@angular/core';
   import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CourseCardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  title = 'angular-course';

onCongratsClick(){
  alert('hello world');
}

onKeyUp(newTitle : string){
  this.title = newTitle;
}

courses = COURSES;

coreCourse = COURSES[0];
rxjsCourse = COURSES[1];
ngrxCourse = COURSES[2];

@ViewChild('cardRef2', {read: ElementRef})
card!: ElementRef;

@ViewChild('courseImage')
courseImage!: ElementRef;

@ViewChildren(CourseCardComponent, {read: ElementRef})
cards!: QueryList<ElementRef>;

constructor(){
  console.log("containerDiv" , this.card);
}

ngAfterViewInit(){

this.cards.changes.subscribe(
  cards => console.log(cards)
);

console.log(this.cards);

}

onCourseSelected(course:Course){
    console.log("app component - click event bubbled...", course);
    console.log("courseimage",this.courseImage);
}

onCoursesEdited(){
  this.courses.push(
    {
        id: 1,
        description: "Angular Core Deep Dive",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'INTERMEDIATE',
        lessonsCount: 10
    }
  );
}

trackCourse(index:number, course:Course){
  return course.id;
}

}
