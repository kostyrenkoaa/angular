import { Injectable } from '@angular/core';
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[] {
    return [
      new User('San1', 10),
      new User('San2', 20),
      new User('San3', 30),
    ];
  }
}
