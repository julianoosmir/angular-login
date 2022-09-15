import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { HelloWordService } from '../hello-world.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']  
})
export class HelloWorldComponent implements OnInit {

  message: any | undefined;

  constructor(private helloWorldService: HelloWordService) { }

  ngOnInit() {

    console.log("HelloWorldComponent");
    this.helloWorldService.helloWorldService().subscribe( (result) => {
      console.log(result);
      
      this.message = result[0].username;
    });
  }
}