import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName='testServer'
  serverCreationStatus= "no Servers was created"
  ServerCreated=false
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {
  }
  onCreateServer(){
    this.ServerCreated= true
    return this.serverCreationStatus="server was created  " + this.serverName
  }
  onUpdateServerName(event: Event){
   this.serverName=(<HTMLInputElement>event.target).value;
    
  }
}
