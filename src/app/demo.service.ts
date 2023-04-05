import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Student} from "./Student";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private http: HttpClient) { }

  studentUrl = '/api/students';

  public getStudents(): Observable<Student[]>{
    // Added responseType: text, because for demo purpose I am just sending plain "Hello, World" text from the backend
    return this.http.get<Student[]>(this.studentUrl);
  }
}
