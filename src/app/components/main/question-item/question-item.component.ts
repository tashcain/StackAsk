import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../../../questions';

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.css'],
})
export class QuestionItemComponent implements OnInit {
  @Input() question: Question;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onNavigate(id: any) {
    this.router.navigate(['/question', id]);
  }
}
