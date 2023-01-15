import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = new User("Diarrassouba", "Seydou", "https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg");
  constructor() { }

  ngOnInit(): void {
  }

}

class User {
  name: string;
  prenom: string;
  profilePictureUrl: string;

  constructor(name: string, prenom: string, profilUrl: string) {
    this.name = name;
    this.prenom = prenom;
    this.profilePictureUrl = profilUrl;
  }

  getFullName() {
    return this.name + ' ' + this.prenom;
  }
}
