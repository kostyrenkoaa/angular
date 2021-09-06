import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  goHome() {
    this.route.navigate(['/user', 10], {
      queryParams: {
        asd: 1,
        asd2: 12,
      }
    })
  }
}
