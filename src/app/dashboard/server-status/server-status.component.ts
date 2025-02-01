import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // constructor function is automatically called when an instance of the class is created.
  // constructor() {
  // }

  ngOnInit() {
    setInterval(() => {
      // this.currentStatus === 'online'
      //   ? (this.currentStatus = 'offline')
      //   : (this.currentStatus = 'online');
      const rnd = Math.random(); // 0 - 0.999....
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
