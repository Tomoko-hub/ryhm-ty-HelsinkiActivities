import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-external-api',
  templateUrl: './external-api.component.html',
  styles: [
  ]
})
export class ExternalApiComponent implements OnInit {
  message!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
