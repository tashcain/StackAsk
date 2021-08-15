import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  reqType: string;
  title: string;
  questions: any[];
  showList: boolean;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reqType = '0';
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  onSubmit() {
    switch (this.reqType) {
      case '0':
        console.log('0title');
        this.questionService.getQuesbyTitle(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );
        break;
      case '1':
        console.log('1title');
        this.questionService.getQuesbyTitle(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );

        break;
      case '2':
        console.log('question');
        this.questionService.getQuesbyDesc(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );
        break;
      case '3':
        console.log('questioncode');
        this.questionService.getQuesbyQuestionCode(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );

        break;
      case '4':
        console.log('username');
        this.questionService.getQuesbyUsername(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );
        break;
      case '5':
        console.log('date');
        this.questionService.getQuesbyDate(this.title).subscribe(
          (response: any) => {
            if (response.length === 0) {
              alert('No responses available');
              this.showList = false;
            } else {
              this.questions = response;
              this.showList = true;
            }
          },
          (error) => {
            alert('Server error');
            this.logout();
            console.log(error);
          }
        );
        break;
    }

    this.reqType = '0';
    this.title = '';
  }

  onBack() {
    this.showList = false;
  }
}
