import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


@Component({
  selector: 'app-remarks',
  templateUrl: './remarks.page.html',
  styleUrls: ['./remarks.page.scss'],
})
export class RemarksPage implements OnInit {
  div:string;
  class:number;
  classarr:number[]=[1,2,3,4,5,6,7,8,9,10];
  divarr:string[]=["A","B"];
  constructor() {
   }
  
  ngOnInit() {

  }
  Onclick(item:number)
  {
    console.log(item);
    // console.log(this.div);
  }
  
}
