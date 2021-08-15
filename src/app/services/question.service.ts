import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from '../questions';
import { from, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  private apiUrl = 'http://localhost:8585';

  constructor(private http: HttpClient) {}

  postQues(quesBody: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post(`${this.apiUrl}/questions`, quesBody, httpOptions);
  }

  postComm(commBody: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.post(`${this.apiUrl}/comment`, commBody, httpOptions);
  }

  getQues() {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(`${this.apiUrl}/questions`, httpOptions);
  }

  getComms(id: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/searchbyque?que=${id}`,
      httpOptions
    );
  }

  getQuesbyTitle(title: any): Observable<Question[]> {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=&label=${title}&question=&username=&date=`,
      httpOptions
    );
  }

  errorHandler(error) {
    return throwError(error || 'server error');
  }

  getQuesbyDesc(title: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=&label=&question=${title}&username=&date=`,
      httpOptions
    );
  }

  getQuesbyDate(date: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=&label=&question=&username=&date=${date}`,
      httpOptions
    );
  }

  getQuesbyQuestionCode(code: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=${code}&label=&question=&username=&date=`,
      httpOptions
    );
  }

  getQuesbyUsername(username: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=&label=&question=&username=${username}&date=`,
      httpOptions
    );
  }

  getaQuestion(id: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/search?questionCode=${id}&label=&question=&username=&date=`,
      httpOptions
    );
  }

  getQuesbyId(id: any) {
    var headers_object = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    });

    const httpOptions = {
      headers: headers_object,
    };

    return this.http.get<Question[]>(
      `${this.apiUrl}/questions/${id}`,
      httpOptions
    );
  }
}
