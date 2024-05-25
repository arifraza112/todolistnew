import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({ // Add @Component decorator
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule],
  standalone: true ,
})
export class AppComponent {

  title = 'ToDoList';

  list:any []= [] ;

  nwTask(item:string){

    this.list.push({id:this.list.length,name:item})
    console.log(this.list)
  }



  removeTask(id :number) {
    console.warn(id)  ;
    this.list = this.list.filter(item=>item.id!==id)
  
  }

}
