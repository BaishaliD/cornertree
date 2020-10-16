import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
   styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    // document.getElementById('toast').style.display = "none";
  }

  signUp(){

  }

}
