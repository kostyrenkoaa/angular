import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  title: string = 'Users List'
  constructor() { }

  ngOnInit(): void {
  }

  getTitle(): string {
    return this.title
  }
}
