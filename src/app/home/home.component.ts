import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CompleterService, CompleterData } from 'ng2-completer';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  map,
  filter,
} from 'rxjs/operators';

type State = { key: string; value: string };

var states: State[] = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public model: State;
  showJobs: Boolean = false;
  public joblist: any;

  formatter = (state: State) => state.value;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      filter((term) => term.length >= 2),
      map((term) =>
        states
          .filter((state) => new RegExp(term, 'mi').test(state.value))
          .slice(0, 10)
      )
    );

  constructor(public http: HttpClient) {}

  ngOnInit() {
    console.log('home page loaded');

    this.http.get('/cornertree/api/filter').subscribe({
      next: (res: any) => {
        console.log('filters returned', res);
        // filterList = res;
        res.data.forEach((element) => {
          states.push(element);
        });

      },
      error: (err) => console.log('error in getting filters', err),
    });
  }

  searchJob() {
    
    this.http
      .get('/cornertree/api/joblist', {
        params: {
          key: this.model.key,
          value: this.model.value,
        },
      })
      .subscribe({
        next: (resp: any) => {
          this.joblist = resp.data;
          console.log('response of filtered jobs', resp);
          console.log(this.joblist);
          this.showJobs = true;
        },
        error: (err) => console.log('cannot fetch job list'),
      });
  }
}
