import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { log } from "console";

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
  imports:[CommonModule]
})

export class AppComponent implements OnInit{

  title : string = "My programme";
//users : string[]  = ['test','test1','test2']
//ngFor
// users : any[] = [
//   {'id':1,'name':"test",'mobilenumber':"9999999999999"},
//   {'id':2,'name':"test1",'mobilenumber':"9999999999999"},
//   {'id':3,'name':"test2",'mobilenumber':"9999999999999"},
//   {'id':4,'name':"test3",'mobilenumber':"9999999999999"},
//   {'id':5,'name':"test4",'mobilenumber':"9999999999999"},
//  ];


//ngIf
 isUserLoggedIn : boolean = false;

//     name:any;

//ngswitchcase
country : any[] = [
  {code:'Ind',country:"India"},
  {code:'Uk',country:"UK"},
  {code:'USA',country:"Ameria"},
  {code:'ISR',country:"Isreal"},
  {code:'PAK',country:"Pakistan"}

]


constructor(){

}

ngOnInit(): void {
  this.name = 'Pushpa'
}


fetchData(){
    console.log('click test working')
    this.name = "test";
}


} 
