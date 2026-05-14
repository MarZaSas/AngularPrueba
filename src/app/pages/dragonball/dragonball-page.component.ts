import { Component, computed, signal } from "@angular/core";
import { NgClass } from "../../../../node_modules/@angular/common/types/_common_module-chunk";


interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball-page.component.html",

})
export class DragonBallPageComponent{

  name = signal("Gohan");
  power = signal(100);



  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 8000},
    {id: 3, name: "Picolo", power: 3000},
    {id: 4, name: "Yamcha", power: 5000},
  ]);

  addCharacter(name: string, pow: number){
    if(!this.name() || !this.power() || this.power()<=10){
      return;
    }
    const newCharacter: Character = {
      id: this.characters.length+1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update(
      list => [...list, newCharacter]
    );

  }

  // powerClasses = computed(() => {
  //   return {
  //     'text-danger': true
  //   }
  // });
}

