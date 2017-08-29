import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

interface SoftwareResponse {
	name: string,
	url: string,
	itunes: string,
	googleplay: string,
	logo: string
}

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.css']
})
export class SoftwareComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  datas = []; 

  ngOnInit(): void {
  	this.http.get<SoftwareResponse>('../assets/gsdotcom.json').subscribe(data => {
  		console.log("Name: " + data["data"][0]["name"]);
  		console.log("itunes: " + data["data"][0]["itunes"]);
      this.datas = data["data"];
  	})
  }

}
