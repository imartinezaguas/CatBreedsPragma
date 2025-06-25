import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardSubtitle,
  IonRow,
  IonCol,
  IonButton,
  IonImg,
  IonCardContent,
} from '@ionic/angular/standalone';
import { CatsBreed } from 'src/app/interface/cats';
import { Router } from '@angular/router';
import { ImageFallbackPipe } from 'src/app/pipes/image-fallback.pipe';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  imports: [
    IonCard,
    IonCardSubtitle,
    IonRow,
    IonCol,
    IonButton,
    IonImg,
    IonCardContent,
    CommonModule,
    ImageFallbackPipe
  ],
  styleUrls: ['./cat.component.scss'],
})
export class CatComponent  {
  @Input() cat!: CatsBreed;
  @Input() index!: number;

  constructor(private router: Router) {}

  openDescription() {
    this.router.navigate(['/cat', this.cat.id]);
  }
}
