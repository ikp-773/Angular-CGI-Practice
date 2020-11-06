import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageName: string = 'My Home Page'
  variableOne: number = null;
  variableTwo: number = null;
  answer: number = null;
  operator: any;

  constructor() { }11

  ngOnInit(): void {
  }

}
