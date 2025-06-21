import { Component, OnInit, ViewChild } from '@angular/core';
import { CatsService } from '../services/cats.service';
import { CatsBreed } from '../interface/cats';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  constructor(private catsService: CatsService) {}

  public cats: CatsBreed[] = [];
  showScrollButton = false;
  @ViewChild(IonContent) content!: IonContent;

  ngOnInit() {
    this.catsService.getBreeds().subscribe((data) => {
      console.log(data);
      this.cats.push(...data);
    });
  }

  loadMoreBreeds(event: any) {
    this.catsService.getBreeds(true).subscribe((data) => {
      this.cats.push(...data);

      event.target.complete();

      if (data.length >= this.cats.length) {
        event.target.disabled = true;
      }
    });
  }

  handleScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    this.showScrollButton = scrollTop > 300;
  }

  scrollToTop() {
    this.content.scrollToTop(400);
  }
}
