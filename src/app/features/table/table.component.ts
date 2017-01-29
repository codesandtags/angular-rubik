import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'rubik-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  headings: any[] = [
    "Component Name",
    "Description",
    "Category",
    "Author",
    "Links"
  ];

  columns: any[] = [
    {
      "name": "Gallery",
      "description": "Show an awesome gallery from a JSON object",
      "category": "Content",
      "author": "Codes and Tags",
      "urlGitHub": "#",
      "urlDemo": "#"
    }, {
      "name": "Accordion",
      "description": "Show the information collapsable/grouped",
      "category": "Content",
      "author": "Juan Gomez",
      "urlGitHub": "#",
      "urlDemo": "#"
    }, {
      "name": "Card",
      "description": "Show a fantastic card with flipped information",
      "category": "Cards",
      "author": "Codes and Tags",
      "urlGitHub": "#",
      "urlDemo": "#"
    }
  ];

  constructor() {
  }

  getColumns() {
    return this.columns;
  }

  getHeadings() {
    return this.headings;
  }

  ngOnInit() {
  }

}
