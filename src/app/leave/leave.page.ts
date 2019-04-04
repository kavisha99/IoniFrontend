import { Component, OnInit,ViewChild } from '@angular/core';
//  var moment=require('moment');
  // moment().format();

@Component({
  selector: 'app-leave',
  templateUrl: './leave.page.html',
  styleUrls: ['./leave.page.scss'],
})
export class LeavePage implements OnInit {
  minDate;
  constructor() {
    
    //this.minDate = moment(Date.now()).format("YYYY-MM-DD");
   }
  
  ngOnInit() {
  }

}
  //   minDate = moment().format('YYYY-MM-DDTHH:mm');
// finishMinDate = moment().format('YYYY-MM-DDTHH:mm');
// finishMaxDate = moment().add(10, 'years').format('YYYY-MM-DDTHH:mm');


// startDateChanged() {

//   if (this.eventData.startEventDate != '') {
//     this.finishMinDate = moment(this.eventData.startEventDate).format('YYYY-MM-DDTHH:mm');
//   }

//   if (this.eventData.startEventDate != '' && this.eventData.endEventDate != '') {
//     if (this.eventData.startEventDate > this.eventData.endEventDate) {
//       this.eventData.endEventDate = moment(this.eventData.startEventDate).format('YYYY-MM-DDTHH:mm');
//     } else {
//       this.finishMinDate = moment(this.eventData.startEventDate).format('YYYY-MM-DDTHH:mm');
//     }
//   }
// }

  // startdate:Date;
  // minStartDate(): string {
  //   return moment().format('YYYY-MM-DD');
  // }
  
  // minEndDate(): string {
  //   return moment(this.startdate).add(1, 'day').format('YYYY-MM-DD');
  // }
  // minStartDate(): string {
//   return moment().format('YYYY-MM-DD');
// }

// minEndDate(): string {
//   return moment(this.startdate).add(1, 'day').format('YYYY-MM-DD');
// }

