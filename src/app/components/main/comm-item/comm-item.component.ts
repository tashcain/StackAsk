import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comm-item',
  templateUrl: './comm-item.component.html',
  styleUrls: ['./comm-item.component.css'],
})
export class CommItemComponent implements OnInit {
  @Input() comment: any;
  constructor() {}

  ngOnInit(): void {}
}
