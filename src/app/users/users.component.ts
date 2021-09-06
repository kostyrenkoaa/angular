import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title: string = 'Users List'
  userAge: number = 0
  users: User[]
  user: User
  name: any;

  constructor(private UserService: UserService) {
  }

  ngOnInit(): void {
    this.users = this.UserService.getUsers()
  }

  getTitle(): string {
    return this.title
  }

  onUserChanged($user: User) {
    this.user = $user
  }
}
