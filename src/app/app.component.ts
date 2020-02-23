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
      lastname: 'Shan'
      // This function Moved to out side of the object
    }

    let printFullName = function () {
      console.log(this.firstname + ' ' + this.lastname);
    }

    // Access the method 
    printFullName.call(name);

    

    let name2 = {
      firstname: 'Krishaan',
      lastname: 'Kumar',
    }
    // Access the method 
    printFullName.call(name2);


  }
}
