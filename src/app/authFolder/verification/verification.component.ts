import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.css']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  keytab(event){
    let element = event.srcElement.nextElementSibling;
    if(element == null)
        return;
    else
        element.focus();
  }

}
