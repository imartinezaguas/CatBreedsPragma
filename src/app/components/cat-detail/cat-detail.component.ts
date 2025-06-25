import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatsService } from 'src/app/services/cats.service';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { CatsBreed } from 'src/app/interface/cats';
import { ImageFallbackPipe } from 'src/app/pipes/image-fallback.pipe';

@Component({
  selector: 'app-cat-detail',
  imports:[CommonModule,IonicModule,ImageFallbackPipe],
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.scss'],
})
export class CatDetailComponent  implements OnInit {

  cat!: CatsBreed;

  constructor( private route: ActivatedRoute,
    private catsService: CatsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cat = this.catsService.getCatById(id)!;
    }
  }

}
