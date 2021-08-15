import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Question } from '../../../questions';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  question: string;
  comment: string;
  questionId: number;
  commentsArr: any[];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.questionId = id;
    console.log(id);
    this.questionService.getaQuestion(id).subscribe(
      (res) => {
        this.question = res[0].question;
      },
      (error) => {
        alert('Error');
      }
    );
    this.questionService.getComms(id).subscribe(
      (res) => {
        this.commentsArr = res;
      },
      (error) => {
        alert('Error');
      }
    );
  }

  onSubmit() {
    let commBody = {
      answer: this.comment,
      question_id: this.questionId,
    };
    this.questionService.postComm(commBody).subscribe((res) => {
      this.questionService.getComms(this.questionId).subscribe(
        (res) => {
          this.commentsArr = res;
        },
        (error) => {
          alert("Comment can't be posted");
        }
      );
    });

    this.comment = '';
  }
}
