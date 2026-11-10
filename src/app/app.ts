import { User } from './../models/user';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from '../ui-components/home/home';



@Component({
  imports: [RouterOutlet, Home],
  selector: 'app-component',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

/* firstName:string="erhan";
lastName:string="gündüz";
age:number=38;
 */

//user={
 // firstName:'Erhan',
//  lastName:'Gündüz',
 // age:38
//}

user1:User={
  id:2,
  firstName:'Erhan',
  lastName:'Yıldız',
  age:30
}


user2:User={
  id:3,
  firstName:'Erhan',
  lastName:'Yıldız',
  age:30
}

user3:User={
  id:1,
  firstName:'Erhan',
  lastName:'Yıldız',
  age:30
}

userList:User[]=[this.user1,this.user2,this.user3]

}
