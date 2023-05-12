import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  id: number;
  constructor() {
    this.id = 1;
  }
  title = 'angular-hw1';

  textlist = [
    {
      id: 1,
      title: 'A Peaceful Evening in the Valley',
      text: 'As the sun began to set behind the mountains, the cool evening breeze swept across the valley, bringing with it the sweet scent of wildflowers. The sound of crickets filled the air as the first stars appeared in the sky. In the distance, a lone wolf howled, its mournful cry echoing through the hills. It was a peaceful and tranquil scene, a moment of respite from the hectic pace of modern life.',
      color: 'red',
      selected: 1,
    },
    {
      id: 2,
      title: 'Village Life at Dusk',
      text: "In the nearby village, the lights flickered on in the windows of the small cottages, and the sound of laughter and music could be heard as the locals gathered for their evening meal. The scent of roasting meat and freshly baked bread wafted through the air, making one's mouth water. In the town square, children played games and chased each other around, while their parents sat on benches, chatting and watching over them.",
      color: 'orange',
      selected: 1,
    },
    {
      id: 3,
      title: 'The Enigma of the Forest',
      text: 'Further afield, the dense forest loomed, its dark canopy hiding secrets and mysteries that had yet to be discovered. Deep within the woods, ancient ruins lay hidden, waiting to be explored by adventurous souls. But for now, the forest remained shrouded in darkness, a place of both wonder and fear.',
      color: 'green',
      selected: 1,
    },
    {
      id: 4,
      title: 'Nightfall and the Call of the Wild',
      text: 'As the night grew darker, the moon rose high in the sky, casting a silver glow over the landscape. The village gradually fell silent, and the only sound was the distant howl of the wolf, a reminder that nature still held sway over this land. And so the night passed, peaceful and quiet, a moment of serenity in a world that was often chaotic and unpredictable.',
      color: 'blue',
      selected: 1,
    },
  ];

  onValueChanged(currentid: number) {
    console.log(currentid);
    this.id = currentid;
    this.textlist.forEach((block) => {
      block.selected = this.id;
    });
    
  }
}
