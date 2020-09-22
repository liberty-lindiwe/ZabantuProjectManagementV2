import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = ['../assets/images/aa.jpg','../assets/images/ac.jpg','../assets/images/ad.jpg','../assets/images/ag.jpg','../assets/images/af.jpg','../assets/images/ag.jpg','../assets/images/aa.jpg','../assets/images/eye.jpg','../assets/images/ghi.jpg','../assets/images/nop.jpg'];
}
