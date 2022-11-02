import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  public color: string = 'red';
  public fontSize: string | number = '1.8rem';
  public classes: string[] = ['underline', 'bold', 'uppercase'];

  constructor() {}

  ngOnInit(): void {}
}
