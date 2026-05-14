import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAdd } from "../../components/dragonball/character-app/character-add";



interface Character{
  id: number;
  name: string;
  power: number;
}

@Component({
  templateUrl: "./dragonball-super-page.component.html",
  selector: "dragonball-super",
  imports: [CharacterListComponent, CharacterAdd],
})
export class DragonBallSuperPageComponent{

  name = signal("");
  power = signal(0);



  characters = signal<Character[]>([
    {id: 1, name: "Goku", power: 9001},
    {id: 2, name: "Vegeta", power: 8000},
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

}

