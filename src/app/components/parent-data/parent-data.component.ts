import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css'],
})
export class ParentDataComponent implements OnInit {
  @Input() public name: string = '';
  @Input() public data!: { role: string; active: boolean };

  constructor() {}

  ngOnInit(): void {}
}
