import { Component } from '@angular/core';
import { DemoService } from './demo.service';
import {Student} from "./Student";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  students : Observable<Student[]> ;
  constructor(private service: DemoService) {
    this.students = service.getStudents();
  }
}
