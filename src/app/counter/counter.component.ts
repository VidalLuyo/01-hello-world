import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 10;
  activeDecrease = false;

  increase() {
    this.counter++;
    this.activeDecrease = true; 
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
    }
    if (this.counter === 0) {
      this.activeDecrease = false; 
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }
}
