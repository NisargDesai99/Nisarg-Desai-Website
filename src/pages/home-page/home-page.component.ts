import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {

  title = "Nisarg Desai"

  constructor() { }

  ngOnInit() {
  }

  // Open linkedin profile in new tab
  linkedinClicked() {
    var url = "https://linkedin.com/in/nisarg-desai/";
    window.open(url, '_blank');
  }

  // Open github profile in new tab
  githubClicked() {
    var url = "https://github.com/NisargDesai99/";
    window.open(url, '_blank');
  }

}
