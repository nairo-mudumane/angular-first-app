import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css'],
})
export class IfRenderComponent implements OnInit {
  public isShow: boolean = true;
  public name: string = 'nairo';

  constructor() {}

  ngOnInit(): void {}
}
