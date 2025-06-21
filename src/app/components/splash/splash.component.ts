import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  imports:[IonicModule],
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent  implements OnInit {

  constructor(private router: Router) { }
  logo = "/src/assets/icon/catsBreeds.png"
  ngOnInit() {
        setTimeout(() => {
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }, 1000);
  }

}
