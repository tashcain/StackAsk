import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../../services/question.service';
import { Question } from '../../../questions';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css'],
})
export class QuestionsComponent implements OnInit {
  questions: Question[] = [];

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    this.questionService
      .getQues()
      .subscribe((question) => (this.questions = question));
    console.log(this.questions);
  }
}
