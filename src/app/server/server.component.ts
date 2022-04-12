import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
serverID:number=10
serverStatus:string="offline"
server:string="DHCP"
  constructor() {
    this.serverStatus=Math.random() > 0.5 ? 'online' : 'offline'
   }
getServiceStatus(){
  return this.serverStatus;
}
  ngOnInit(): void {
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red'
  }
}
