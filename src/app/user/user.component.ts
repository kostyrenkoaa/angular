import {Component, Input, OnInit} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User
  @Input('myText') text: string

  _userAge: number

  @Input()
    set userAge(age: number) {
    if (age < 0) {
      this._userAge = 0
      return
    }

    this._userAge = age
  }
  get UserAge() {
    return this._userAge
  }

  constructor() { }

  ngOnInit(): void {
  }

}
