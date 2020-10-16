import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CompleterService, CompleterData } from 'ng2-completer';
import { FormsModule } from '@angular/forms';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

type State = {filter:string, value:string};

var states: State[] = [
  {filter: "0", value: 'Alabama'},
  {filter: "1", value: 'Alaska'},
  {filter: "2", value: 'American Samoa'},
  {filter: "3", value: 'Arizona'},
  {filter: "4", value: 'Arkansas'}
];
//   {filter: 9, value: 'District Of Columbia'},
//   {filter: 10, value: 'Federated States Of Micronesia'},
//   {filter: 11, value: 'Florfiltera'},
//   {filter: 12, value: 'Georgia'},
//   {filter: 13, value: 'Guam'},
//   {filter: 14, value: 'Hawaii'},
//   {filter: 15, value: 'filteraho'},
//   {filter: 16, value: 'Illinois'},
//   {filter: 17, value: 'Indiana'},
//   {filter: 18, value: 'Iowa'},
//   {filter: 19, value: 'Kansas'},
//   {filter: 20, value: 'Kentucky'},
//   {filter: 21, value: 'Louisiana'},
//   {filter: 22, value: 'Maine'},
//   {filter: 23, value: 'Marshall Islands'},
//   {filter: 24, value: 'Maryland'},
//   {filter: 25, value: 'Massachusetts'},
//   {filter: 26, value: 'Michigan'},
//   {filter: 27, value: 'Minnesota'},
//   {filter: 28, value: 'Mississippi'},
//   {filter: 29, value: 'Missouri'},
//   {filter: 30, value: 'Montana'},
//   {filter: 31, value: 'Nebraska'},
//   {filter: 32, value: 'Nevada'},
//   {filter: 33, value: 'New Hampshire'},
//   {filter: 34, value: 'New Jersey'},
//   {filter: 35, value: 'New Mexico'},
//   {filter: 36, value: 'New York'},
//   {filter: 37, value: 'North Carolina'},
//   {filter: 38, value: 'North Dakota'},
//   {filter: 39, value: 'Northern Mariana Islands'},
//   {filter: 40, value: 'Ohio'},
//   {filter: 41, value: 'Oklahoma'},
//   {filter: 42, value: 'Oregon'},
//   {filter: 43, value: 'Palau'},
//   {filter: 44, value: 'Pennsylvania'},
//   {filter: 45, value: 'Puerto Rico'},
//   {filter: 46, value: 'Rhode Island'},
//   {filter: 47, value: 'South Carolina'},
//   {filter: 48, value: 'South Dakota'},
//   {filter: 49, value: 'Tennessee'},
//   {filter: 50, value: 'Texas'},
//   {filter: 51, value: 'Utah'},
//   {filter: 52, value: 'Vermont'},
//   {filter: 53, value: 'Virgin Islands'},
//   {filter: 54, value: 'Virginia'},
//   {filter: 55, value: 'Washington'},
//   {filter: 56, value: 'West Virginia'},
//   {filter: 57, value: 'Wisconsin'},
//   {filter: 58, value: 'Wyoming'}
// ];

//const filterList: State[] = [{"filter": "skill", "value":"java"}];
var joblist = [];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  public model: State;


  formatter = (state: State) => state.value;

  search = (text$: Observable<string>) => text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    filter(term => term.length >= 2),
    map(term => states.filter(state => new RegExp(term, 'mi').test(state.value)).slice(0, 10))
    //map(term => filterList.filter(state => new RegExp(term, 'mi').test(state.value)).slice(0, 10))
  )

  constructor(public http: HttpClient) {}

  ngOnInit() {

    console.log("home page loaded");
    
    this.http
      .get('/cornertree/api/filter')
      .subscribe({
        next: (res: any) => {
          console.log('filters returned', res);
          // filterList = res;
          res.data.forEach(element => {
            states.push(element);

            this.http.get('/cornertree/api/joblist').subscribe({
              next: (resp:any) => {
                joblist = resp
              },
              error: (err) => console.log("cannot fetch job list")
            })
          });
        },
        error: (err) => console.log('error in getting filters', err),
      });
      
  }

}

