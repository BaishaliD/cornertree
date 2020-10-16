import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    public http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  signUp(){

    this.http
      .get("api/signup",{
        params : {userID : "1"}
      })
      .subscribe({
        next: (res:any) => {
          console.log("response returned", res);
        },
        error: (err) => console.log("error in get req",err)
      })
  }

}
