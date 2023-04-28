import { Component } from '@angular/core';
import { Box } from './box';

@Component({
  selector: 'app-box-template',
  templateUrl: './box-template.component.html',
  styleUrls: ['./box-template.component.css']
})
export class BoxTemplateComponent {
  pageTitle = "Time for Some Pokemon Fun!";
  pageTitleSub = "Scroll on Each Box if Text Too Long!";
  numBoxClicked = 0;
  colors = ['none', 'blue', 'black', 'red', 'green'];

  resetAll(num: number) {
    for (let i = 0; i < this.boxArr.length; i++) {
      this.numBoxClicked = num + 1;
      if (i != num) {
        this.boxArr[i].buttonClicked = false;
      }
    }
  }

  boxArr: Box[] = [
    {
      boxTitle: "Squirtle",
      boxBody: "Squirtle (Japanese: ゼニガメ Zenigame) is a Water-type Pokémon introduced in Generation I. It evolves into Wartortle starting at level 16, which evolves into Blastoise starting at level 36. Along with Bulbasaur and Charmander, Squirtle is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. Squirtle is a small reptilian Pokémon that resembles a light-blue turtle. While it typically walks on its two short legs, it has been shown to run on all fours in Super Smash Bros. Brawl. It has large, purplish or reddish eyes and a slightly hooked upper lip. Each of its hands and feet have three pointed digits. The end of its long tail curls inward. Its body is encased by a tough shell that forms and hardens after birth. This shell is brown on the top, pale yellow on the bottom, and has a thick white ridge between the two halves." ,
      buttonClicked: false,
      boxButton() {
        this.buttonClicked = !this.buttonClicked;
      }
    },
    {
      boxTitle: "Umbreon",
      boxBody: "Umbreon (Japanese: ブラッキー Blacky) is a Dark-type Pokémon introduced in Generation II. It evolves from Eevee when leveled up with high friendship during the night or with a Moon ShardXD in the player's Bag, except in areas with a Moss Rock or Ice Rock or while knowing a Fairy-type moveSwShLASV (and having at least two levels of affectionVI–VII). It is one of Eevee's final forms, the others being Vaporeon, Jolteon, Flareon, Espeon, Leafeon, Glaceon, and Sylveon. Umbreon is the starter Pokémon of Pokémon Colosseum alongside Espeon. Umbreon is a mammalian Pokémon which has a sleek, black body with four slender legs and crimson eyes. It has two pairs of pointed teeth (one pair in each jaw) which are visible when its mouth is open. It has long, pointed ears and a bushy tail, each with a yellow band around them. Its forehead and legs have yellow rings on them.",
      buttonClicked: false,
      boxButton() {
        this.buttonClicked = !this.buttonClicked;
      }
    },
    {
      boxTitle: "Charmander",
      boxBody: "Charmander (Japanese: ヒトカゲ Hitokage) is a Fire-type Pokémon introduced in Generation I. It evolves into Charmeleon starting at level 16, which evolves into Charizard starting at level 36. Along with Bulbasaur and Squirtle, Charmander is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. Charmander is a bipedal, reptilian Pokémon with a primarily orange body and blue eyes. Its underside from the chest down and the soles of its feet are cream-colored. It has two small fangs visible in its upper jaw and two smaller fangs in its lower jaw. A fire burns at the tip of this Pokémon's slender tail and has blazed there since Charmander's birth. The flame can be used as an indication of Charmander's health and mood, burning brightly when the Pokémon is strong, weakly when it is exhausted, wavering when it is happy, and blazing when it is enraged.",
      buttonClicked: false,
      boxButton() {
        this.buttonClicked = !this.buttonClicked;
      }
    },
    {
      boxTitle: "Bulbasaur",
      boxBody: "Bulbasaur (Japanese: フシギダネ Fushigidane) is a dual-type Grass/Poison Pokémon introduced in Generation I. It evolves into Ivysaur starting at level 16, which evolves into Venusaur starting at level 32. Along with Charmander and Squirtle, Bulbasaur is one of the three starter Pokémon of Kanto available at the beginning of Pokémon Red, Green, Blue, FireRed, and LeafGreen. Bulbasaur is a small, quadrupedal amphibian Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb that conceals two slender, tentacle-like vines, which is grown from a seed planted there at birth.",
      buttonClicked: false,
      boxButton() {
        this.buttonClicked = !this.buttonClicked;
      }
    }
  ]
}
