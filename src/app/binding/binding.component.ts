import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  // standalone: true,
  //imports: [],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css',
  
})
export class BindingComponent implements  OnInit {
  pageTitle:string ="My esting project on Data Binding";
  
  constructor(){
    
  }

  ngOnInit() :void{
        

  }
  Navtonewpage ()
  {
      console.log("Tesssst Data");
      
  }
 
}
