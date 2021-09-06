import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  id: number
  constructor(
    private activateRoute: ActivatedRoute,
    private userService: UserService
  ) {
    activateRoute.params.subscribe(param => this.id = param.id)
  }

  ngOnInit(): void {
  }

}
