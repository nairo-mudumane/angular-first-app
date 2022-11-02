import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css'],
})
export class EmitterComponent implements OnInit {
  number: number = 0;

  onChangeNumber() {
    this.number = Math.floor(Math.random() * 100);
  }

  constructor() {}

  ngOnInit(): void {}
}
