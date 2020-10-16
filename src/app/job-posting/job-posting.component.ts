import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.css'],
})
export class JobPostingComponent implements OnInit {
  jobRole: String;
  function: String;
  subFunction: String;
  company: String;
  coreSkills: String[] = [];
  softSkills: String[] = [];
  location: String;
  pin: Number;
  compensation: Number;
  jd: String;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    document.getElementById('toast').style.display = "none";
  }

  postJob() {
    var job = {
      jobRole : this.jobRole,
      function: this.function,
      subFunction: this.subFunction,
      company: this.company,
      //coreSkills: String[] = [];
      //softSkills: String[] = [];
      location: this.location,
      pin: this.pin,
      compensation: this.compensation,
      jd: this.jd,
    };
    this.http
      //.post('http://localhost:8000/cornertree/api/job',job)
      .post('cornertree/api/job',job)
      .subscribe({
        next: (res: any) => {
          console.log('response returned', res);
          document.getElementById('toast').style.display = "block";
          document.getElementById('form').style.display = "none";
        },
        error: (err) => console.log('error in get req', err),
      });
  }
}
