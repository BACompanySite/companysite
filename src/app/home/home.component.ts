import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var jquery:any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor ( private router: Router) {}

  ngOnInit() {
// this.jqueryTest();
  }



  AiMlDlButtonClick() {
    // alert("AI ML DL");
    this.router.navigateByUrl("/ai-ml-dl");
  }

  gameDevButtonClick() {

  }

  digiMarketingButtonClick() {

  }

  swDevButtonClick() {

  }

  // jqueryTest()
  // {
  // alert("jQuery test");
  // }

}
