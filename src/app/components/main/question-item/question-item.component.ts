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
  Qmap: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let qmapp = {
      '0': 'Programming',
      '1': 'Technology',
      '2': 'Games',
      '3': 'health',
      '4': 'News',
      '5': 'Other',
    };

    this.Qmap = qmapp;
  }

  onNavigate(id: any) {
    this.router.navigate(['/question', id]);
  }
}
