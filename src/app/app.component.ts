import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Javascript-Concepts Polyfill for bind method';

  constructor() {

    // Object 1
    let name ={
      firstname: 'Kumar',
      lastname: 'Shan'
    }

    let printName = function() {
      console.log(this.firstname + ' ' + this.lastname);
    }

    // Default Bind Method
    let printMyName = printName.bind(name);
    printMyName();

    
    // we need to create our own bind() by mybind()
    // Example Below
    
    // mybind() {
    // }

    // let printMyName2 = printName.mybind(name);
    // printMyName2();

  }
}
