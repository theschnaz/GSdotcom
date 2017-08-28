import { Component, OnInit } from '@angular/core';
import { WelcomeData } from './welcome-data';
import { WELCOMEDATAS } from './mock';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  constructor() { }

  welcomeDatas: WelcomeData[];

  ngOnInit() {
  	this.welcomeDatas = WELCOMEDATAS;
  }

}
