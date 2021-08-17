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
  showError: boolean;
  errorMsg: string;

  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reqType = '0';
    if (this.showList) {
      document.getElementById('inpidiv').style.top = '20%';
    }
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
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
        let qmapp = {
          programming: '0',
          technology: '1',
          games: '2',
          health: '3',
          news: '4',
          other: '5',
        };
        let par = this.title.toLowerCase();
        this.questionService.getQuesbyQuestionCode(qmapp[par]).subscribe(
          (response: any) => {
            if (response.length === 0) {
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
              this.showError = true;
              this.errorMsg = 'No responses available';
              this.showList = false;
            } else {
              document.getElementById('inpidiv').style.top = '15%';
              this.questions = response;
              this.showList = true;
              this.showError = false;
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
