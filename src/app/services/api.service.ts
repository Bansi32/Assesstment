import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) { }

  //post questions
  PostQuestion(data: any) {
    return this.http.post<any>("http://localhost:8084/question", data).pipe(map((res: any) => {
      return res;
    }))
  }

  //get questions
  GetQuestions() {
    return this.http.get<any>("http://localhost:8084/question").pipe(map((res: any) => {
      return res;
    }))
  }

  //get cae questions
  GetCaeQuestions() {
    return this.http.get<any>("http://localhost:8084/question/cae").pipe(map((res: any) => {
      return res;
    }))
  }

  //get ese questions
  GetEseQuestions() {
    return this.http.get<any>("http://localhost:8084/question/ese").pipe(map((res: any) => {
      return res;
    }))
  }


}
