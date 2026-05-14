import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';



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

  public dragonballService = inject(DragonballService);

}

