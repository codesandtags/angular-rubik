import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rubik-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  applicationName: string = 'Angular Rubik';

  constructor() { }

  ngOnInit() {
  }

}
