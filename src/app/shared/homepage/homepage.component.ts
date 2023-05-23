import { Component } from '@angular/core';
import { eachBox } from './interface';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  langList : string[] = ['🌐 English'];
  bigImage : string[] = [
    "Unlimited movies, TV shows, and more", "Watch anywhere. Cancel anytime.",
    "Ready to watch? Enter your email to create or restart your membership.",
  ]

  smallBox : eachBox[] = [
    {
      bigText : "Watch everywhere",
      smallText : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image : "../../../assets/Small_1.png",
      id : 1,
      even: false,
    }, {
      bigText : "Watch everywhere",
      smallText : "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
      image : "../../../assets/Small_2.png",
      id : 2,
      even: true,
    }, {  
      bigText : "Create profiles for kids",
      smallText : "Send kids on adventures with their favorite characters in a space made just for them—free with your membership.",
      image : "../../../assets/Small_3.png",
      id : 3,
      even: false,
    }, {
      bigText :  "Download your shows to watch offline",
      smallText : "Only available on ad-free plans.",
      image : "../../../assets/Small_4.png",
      id : 4,
      even: true,
    }
  ]
}
