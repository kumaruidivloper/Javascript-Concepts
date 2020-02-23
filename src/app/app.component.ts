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


    // Object 2
    let name2 = {
      firstname: 'Krishaan',
      lastname: 'Kumar',
    }


    // Object 3
    let name3 = {
      firstname: 'Thillai',
      lastname: 'Vasuki',
    }


    // Bind Method Start
    let printMyName = printFullName.bind(name, 'Kumbakonam', 'TamilNadu'); // store the function in let 
    console.log(printMyName); // Can see the retun function
    printMyName(); // we can excute the function any time


     // Bind Method Start
     let printMyName2 = printFullName.bind(name2, 'Tirunelveli', 'TamilNadu'); // store the function in let 
     console.log(printMyName); // Can see the retun function
     printMyName2(); // we can excute the function any time

     // Bind Method Start
     let printMyName3 = printFullName.bind(name3, 'Tirunelveli', 'TamilNadu'); // store the function in let 
     console.log(printMyName); // Can see the retun function
     printMyName3(); // we can excute the function any time

  }
}
