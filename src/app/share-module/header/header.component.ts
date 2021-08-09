import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  slogan: string;
  constructor() { }

  ngOnInit(): void {
    this.title = 'Lumen Fidei Radio 98.1 FM';
  }

}
