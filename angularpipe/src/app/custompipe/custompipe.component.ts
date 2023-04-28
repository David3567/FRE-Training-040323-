import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {
  Fahrenheit!: number;
  celcius!: number;
  str: string = "this is a long paragraph, so we use pipe to make it bit shorter.";

  constructor() { }

  ngOnInit(): void {
  }

}
