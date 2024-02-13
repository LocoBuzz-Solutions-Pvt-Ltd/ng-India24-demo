import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals-demo',
  standalone: true,
  imports: [],
  templateUrl: './signals-demo.component.html',
  styleUrl: './signals-demo.component.scss'
})
export class SignalsDemoComponent {
  counter: number = 0;

    increment() {
        this.counter++;
    }

    reset(){
      this.counter = 0;
    }
    // readonly counterr = signal(0);
    counterr = signal(1);

  constructor() {
    // effect(() => {
    //   this.counterr.set(1);
    // });
    console.log(`counter value: ${this.counterr()}`)
    
  }

  incrementSignal(){
    this.counterr.update(r => r+1);

  }
  resetSignal() {

    console.log(`Updating counter...`)

    this.counterr.set(0);
  }

  derivedCounter = computed(() => {

    return this.counterr() * 10;

})

}
