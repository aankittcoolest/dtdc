import { Component, OnInit, Input } from '@angular/core';
import { RequestBox } from '../request-box';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor() { }

  @Input()
  requestBox

  ngOnInit() {
  }

}
