
import { ChangeDetectionStrategy, Component, signal, WritableSignal } from "@angular/core";


@Component({
 templateUrl: 'counter-page.component.html',
  // imports: [NgClass],
  styles: `
    button{
      padding: 10px;
      margin: 10px 30px;
      width: 200px;
    }

  `,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter: number = 10;
  counterSignal = signal(10);

  constructor(){
    // setInterval(()=>{
    //   this.counter+=1;
    //   this.counterSignal.update((v)=>v+1);
    //   console.log("Tick");
    // },2000);
  }

  increaseBy(value: number) {
    this.counter += value
    this.counterSignal.update((current) => current+value)
  }

  decreaseBy(value: number){
    this.counter -= value;
    this.counterSignal.update((current) => current-value)
  }

  reset(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
