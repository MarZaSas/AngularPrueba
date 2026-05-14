import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);

addCharacter(name: string, pow: number){
    if(!this.name() || !this.power() || this.power()<=10){
      return;
    }
    const newCharacter: Character = {
      id: 1000,
      name: this.name(),
      power: this.power()
    }
    // this.characters.update(
    //   list => [...list, newCharacter]
    // );
    console.log(newCharacter);
    this.resetFields();
  }

  resetFields(){
    this.name.set('');
    this.power.set(0);
  }

}
