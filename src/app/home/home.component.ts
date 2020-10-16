import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompleterService, CompleterData } from 'ng2-completer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // stateForm: FormGroup;
  searchStr: String;
  captain: String;
  dataService: CompleterData;
  input: String;

  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' },
  ];
  protected captains = [
    'James T. Kirk',
    'Benjamin Sisko',
    'Jean-Luc Picard',
    'Spock',
    'Jonathan Archer',
    'Hikaru Sulu',
    'Christopher Pike',
    'Rachel Garrett',
  ];
  
  constructor(completerService: CompleterService) {
    this.dataService = completerService.local(
      this.searchData,
      'color',
      'color'
    );
  }

  ngOnInit() {}

  searchJob(){
    console.log("input is", this.input)
  }
}
