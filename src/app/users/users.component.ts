import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title: string = 'Users List'
  userAge: number = 0
  user: User
  name: any;
  isShow: boolean = true;
  numberUser: any;
  numbers: number[] = [1,2,3,4,5,6,7,8,9,10]

  constructor() {
    this.user = new User('Вася', 24)
  }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title
  }

  onUserChanged($user: User) {
    this.user = $user
  }
}
