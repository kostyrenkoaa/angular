import {Component} from '@angular/core';
import {User} from "./models/user";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test Angular'
  name: string
  age: number
  users: User[] = []

  constructor() {
  }

  addUser(): void {
    if (!this.name || !this.age) {
      return
    }

    this.users.push(new User(this.name, this.age))
    this.clearForm()
  }

  clearForm(): void {
    this.name = ''
    this.age = 0
  }
}
