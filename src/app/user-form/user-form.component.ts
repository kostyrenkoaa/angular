import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {User} from "../models/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  title: string = 'Users Form'

  @Output() onUserAdded: EventEmitter<User> = new EventEmitter<User>()
  // @Output() userChange: EventEmitter<string> = new EventEmitter<string>()

  name: string = ''
  age: number = 0

  user: User

  constructor() { }

  ngOnInit(): void {
  }

  save() {
    this.user = new User(this.name, this.age)
    this.onUserAdded.emit(this.user)
  }

  input1($event: any) {
    this.name = $event.target.value
  }

  // onNameUserChange($event: string) {
  //   this.name = $event
  //   this.userChange.emit($event)
  // }
}
