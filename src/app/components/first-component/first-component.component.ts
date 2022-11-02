import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  firstname: String = 'Nairo';
  lastname: String = 'Mudumane';
  fullname: string = `${this.firstname} ${this.lastname}`;

  constructor() {}

  ngOnInit(): void {}
}
