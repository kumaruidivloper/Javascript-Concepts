import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Javascript-Concepts Call-Apply-Bind';

  constructor() {

    // Object 1
    let name ={
      firstname: 'Kumar',
      lastname: 'Shan'
      // This function Moved to out side of the object
    }

    // common method for use display fullname
    // here we introduce [hometown argument]
    let printFullName = function (hometown, state) {
      console.log(this.firstname + ' ' + this.lastname + ' ' + 'from' + ' ' + hometown + ', ' + state);
    }

    // Access the method 
    // here we pass the hometown value
    printFullName.call(name, 'Kumbakonam', 'TamilNadu'); // Using printFullName method


    // Object 2
    let name2 = {
      firstname: 'Krishaan',
      lastname: 'Kumar',
    }
    // Access the method 
    // here we pass the hometown value
    printFullName.call(name2, 'Tirunelveli', 'TamilNadu'); // Using printFullName method


    // Object 3
    let name3 = {
      firstname: 'Thillai',
      lastname: 'Vasuki',
    }

    // Access the method 
    // here we pass the hometown value
    printFullName.call(name3, 'Tirunelveli', 'TamilNadu'); // Using printFullName method

  }
}
