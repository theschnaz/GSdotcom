import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gregory Schnese.com';
  location = 'resume';

  updateLocation(location){
  	this.location = location;
  }
}
