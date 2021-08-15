import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../questions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myques',
  templateUrl: './myques.component.html',
  styleUrls: ['./myques.component.css'],
})
export class MyquesComponent implements OnInit {
  questions: Question[];

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.questionService
      .getQuesbyUsername(localStorage.getItem('username'))
      .subscribe(
        (res) => {
          this.questions = res;
        },
        (error) => {
          alert('Server error');
          this.logout();
          console.log(error);
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
