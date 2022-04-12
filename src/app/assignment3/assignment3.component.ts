import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  buttonclicked=false
  i=0
  assi = [0]
  constructor() { }

  ngOnInit(): void {
  }
  hideTheParagrph(){
    this.buttonclicked = true
    this.i++
    this.assi.push( this.i)
  }
  getColor(){
    return 'blue'
  }
}
