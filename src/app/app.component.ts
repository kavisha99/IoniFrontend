import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { LoginServicesService } from "../app/Services/login-services.service";
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Student } from '../../Classes/Student'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    }
  ];
  path:string=localStorage.getItem('img_path');
  user_id:string=localStorage.getItem('user_id');
  name:string;
  class:number;
  div:string;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private _router:Router,
    private _ser:LoginServicesService

  ) {
    this.initializeApp();
  }
  ngOnInit() {
    this._ser.getStudentByUserId(this.user_id).subscribe(
      (data:Student[])=>{
        localStorage.setItem('class',data[0].s_class.toString());
        localStorage.setItem('img_path',data[0].s_profilepic)
        console.log(data[0].s_class);
        this.name=data[0].s_sname+" "+data[0].s_fname+" "+data[0].s_lname;
        this.class=data[0].s_class;
        this.div=data[0].s_div;
        this.path=data[0].s_profilepic;
        console.log("path: "+this.path);
      }
    );
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


}
