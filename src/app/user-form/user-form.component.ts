import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  name: string
  age: number
  colSpan: number = 2
  src: string = 'https://i.stack.imgur.com/mA99c.jpg?s=64&g=1'

  constructor() { }

  ngOnInit(): void {
  }

  save(event:any) {
    console.log(event)
  }
}
