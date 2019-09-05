import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-domain-townhall',
  templateUrl: './domain-townhall.component.html',
  styleUrls: ['./domain-townhall.component.css']
})
export class DomainTownhallComponent implements OnInit {
  messages:string[]=[];
  
  form= new FormGroup({
    message: new FormControl('')
  })
  constructor() { }

  ngOnInit() {
  }

  Post(){
    this.messages.push(this.form.get('message').value);
    console.log(this.messages);
    this.form.reset();
  }  

}
