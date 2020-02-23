import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Javascript-Concepts Call-Apply-Bind';

  constructor() {

    let name ={
      firstname: 'Kumar',
      lastname: 'Shan',
      printFullName: function () {
        console.log(this.firstname + ' ' + this.lastname);
      }
    }

    // Access the method 
    name.printFullName();


    let name2 = {
      firstname: 'Krishaan',
      lastname: 'Kumar',

      // This way we can but not good approch

      // printFullName: function () {
      //   console.log(this.firstname + ' ' + this.lastname);
      // }

    }

    // Function Borrowing
    // call method can accept two argumaents FirstArg: scope Of this, SecondArg: Parameters
    name.printFullName.call(name2);

  }
}
