import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public _router:Router) { }
  
  ngOnInit() {
  }

  onlogin()
  {
  this._router.navigate(['log-in-page']);
  }
}


