import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent {
  title = 'firstapp';
  value = 10;

  
   
  public Increment()
  {   
   // <li *ngFor = "let number of value"> </li>
      var answer:number = this.value + 1;
          this.value=answer;
         // answer+++;
      //console.log(answer);
  }

  public Decrement()
  {
       var answer:number = this.value - 1;
      this.value=answer;

  }
 

}
 