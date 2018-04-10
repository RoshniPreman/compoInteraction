import { Component, OnInit , Input} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() hero : Hero;
  @Input('master') masterName : string; // alias name for input

}
