import { Component, OnInit } from '@angular/core';
import io from 'socket.io-client';
//const url = 'ws://35.183.23.210:8000/b';
const url2 = 'http://localhost:3000';
const socket = io(url2);
@Component({
  selector: 'app-web-socket',
  templateUrl: './web-socket.component.html',
  styleUrls: ['./web-socket.component.css']
})
export class WebSocketComponent implements OnInit {

  constructor() { }
  public sensorss: any = {}
  public memory: any = {}
  public cpu: any = {}

  ngOnInit(): void {
    socket.on('data', (res) => {

       const {sensor, lidar: {memory, cpu}} = res;
       this.sensorss = sensor;
       this.memory = memory;
       this.cpu = cpu;
       console.log(this.sensorss);

    })
  }

}
