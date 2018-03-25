import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.css']
})
export class StepBarComponent implements OnInit {

  constructor() { }

  @Input()
  steps

  ngOnInit() {
  }

}
