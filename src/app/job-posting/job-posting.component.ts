import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  coreSkill1; coreSkill2; coreSkill3; softSkill1; softSkill2; softSkill3;
  location: String;
  pin: Number;
  compensation: Number;
  jd: String;
  showForm: Boolean = true;

  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    document.getElementById('toast').style.display = "none";
  }

  refresh(){
    window.location.reload();
  }

  postJob() {

    if(this.location==null){
      window.alert("Please add a location");
      return;
    }
    if(this.jobRole==null){
      window.alert("Please add a Job role");
      return;
    }
    this.coreSkills.push(this.coreSkill1);
    this.coreSkills.push(this.coreSkill2);
    this.coreSkills.push(this.coreSkill3);
    this.softSkills.push(this.softSkill1);
    this.softSkills.push(this.softSkill2);
    this.softSkills.push(this.softSkill3);

    var job = {
      jobRole : this.jobRole,
      function: this.function,
      subFunction: this.subFunction,
      company: this.company,
      coreSkills: this.coreSkills,
      softSkills: this.softSkills,
      location: this.location,
      pin: this.pin,
      compensation: this.compensation,
      jd: this.jd,
    };
    this.http
      .post('/cornertree/api/job',job)
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
