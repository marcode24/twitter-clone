import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  auto_height(elem: any) {
    elem.style.height = "64px";
    elem.style.height = (elem.scrollHeight)+ "px";
  }

}
