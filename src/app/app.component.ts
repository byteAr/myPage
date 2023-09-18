import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myPage';
  prueba=true;
  list= [
    {
      title: 'title1'
    },
    {
      title: 'title2'
    },
    {
      title: 'title3'
    },
    {
      title: 'title4'
    }
  ]
  ngOnInit(): void {
    initFlowbite();
  }
}
