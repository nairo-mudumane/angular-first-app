import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent implements OnInit {
  public data: boolean = true;
  public mouseHover: boolean = false;
  public count: number = 0;

  toggleShowData(): void {
    this.data = !this.data;
  }

  toggleMouseHover(): void {
    this.mouseHover = !this.mouseHover;
  }

  increment() {
    if (this.count < 10) {
      this.count = this.count + 1;
    } else {
      this.count = 0;
    }
  }

  constructor() {}
  ngOnInit(): void {}
}
