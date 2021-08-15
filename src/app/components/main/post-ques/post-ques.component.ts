import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionService } from '../../../services/question.service';

@Component({
  selector: 'app-post-ques',
  templateUrl: './post-ques.component.html',
  styleUrls: ['./post-ques.component.css'],
})
export class PostQuesComponent implements OnInit {
  description: string;
  title: string;
  questionCode: string;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    var td = yyyy + '-' + mm + '-' + dd;
    const quesBody = {
      question: this.description,
      label: this.title,
      questionCode: this.questionCode,
      date: td,
      username: localStorage.getItem('username'),
    };

    this.questionService.postQues(quesBody).subscribe(
      (response: any) => {
        this.router.navigate(['/dashboard']);
        alert('Question has been posted');
      },
      (error) => {
        alert('Unauthorised');
        this.logout();
      }
    );

    this.description = '';
    this.title = '';
    this.questionCode = '';
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
