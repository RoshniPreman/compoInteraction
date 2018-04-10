import { Component } from '@angular/core';
import { Heroes } from "./hero";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // two input properties
   heroes = Heroes; // imported heroes array from hero class file.
   master =  "Master";
}
