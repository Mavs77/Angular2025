import {
  Component,
  OnDestroy,
  OnInit,
  DestroyRef,
  inject,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  private destroyRef = inject(DestroyRef);
  // private interval?: ReturnType<typeof setInterval>;
  // constructor function is automatically called when an instance of the class is created.
  // constructor() {
  // }

  //ngOnIt runs once after the component's inputs have all been initialized. Typically follows the constructor function.
  ngOnInit() {
    const interval = setInterval(() => {
      // this.currentStatus === 'online'
      //   ? (this.currentStatus = 'offline')
      //   : (this.currentStatus = 'online');
      // const rnd = Math.random(); // 0 - 0.999....
      const rnd = 0.4;
      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  //runs once after ALL the children in the component's template (its view) have been initialized.
  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval);
  // }
}
