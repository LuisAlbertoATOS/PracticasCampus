import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testingApp';

  variableInterna:Array<number>=[];

  suma(num1:number, num2:number):number{
    return num1+num2;
  }

}
