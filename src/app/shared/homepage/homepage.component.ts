import { Component } from '@angular/core';
import { eachBox } from 'src/app/core/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/localStorage';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(
    private router: Router, 
    private storage: LocalStorageService,
  ) {}
  
  username = this.storage.getItem("signup-username");
  langList : string[] = ['🌐 English'];
  bigImage : string[] = [
    "Unlimited movies, TV shows, and more", "Watch anywhere. Cancel anytime.",
    "Ready to watch? Enter your email to create or restart your membership.",
  ]
  message!: string;

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
  storeData = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  })

  signOut() {
    this.storage.setItem('signup-username', "");
    this.storage.setItem('signup-email', "");
    this.storage.setItem('signup-role', "");
    this.storage.setItem('signup-tmdb', "");
    this.username = "";
  }

  onSubmit() {
    if (this.storeData.valid) {
      this.storage.setItem('signup-email', this.storeData.value.email);
      this.router.navigate(['/step1']);
    }
  }

  ngOnInit() {
    this.storage.removeItem('page');
    this.storage.removeItem('windowPos');
  }
}
