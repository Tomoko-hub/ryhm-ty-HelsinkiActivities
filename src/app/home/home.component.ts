import { Component, OnInit } from '@angular/core';
import { faLink } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {
  faLink = faLink;
  constructor() { }

  ngOnInit(): void {
  }

}
