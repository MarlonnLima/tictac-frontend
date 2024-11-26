import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public title: string;
  public placeholderTextSearchBox: string;

  constructor() {
    this.title = "TicTac Store";
    this.placeholderTextSearchBox = "Search here";
  }
}
