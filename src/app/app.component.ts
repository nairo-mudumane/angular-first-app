import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public userName: string = 'Nairo Mudumane';
  public userData = {
    role: 'admin',
    active: true,
  };
}
