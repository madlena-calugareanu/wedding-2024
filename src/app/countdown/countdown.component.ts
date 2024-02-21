import { Component } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent {
  finalDate = new Date('2024-07-07T17:00:00');
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    setInterval(() => {
      const now = new Date();
      const timeDiff = this.finalDate.getTime() - now.getTime();

      this.days = Math.floor(timeDiff / (1000 * 3600 * 24));
      this.hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600));
      this.minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60));
      this.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    }, 1000);
  }
}
