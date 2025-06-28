import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges  } from '@angular/core';
import {
  IonCol,
  IonRow,
  IonGrid,
} from '@ionic/angular/standalone';
import { CatsBreed } from 'src/app/interface/cats';
import { CatComponent } from "../cat/cat.component";;
import { CommonModule } from '@angular/common';
import { FilterBreedsComponent } from '../filter-breeds/filter-breeds.component';

@Component({
  selector: 'app-cats',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonCol, IonRow, IonGrid,CatComponent,CommonModule,FilterBreedsComponent],
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent  implements OnChanges, OnInit {
 // se puede cambiar por signals
  @Input() cats : CatsBreed[] = [];
  filteredCats: CatsBreed[] = [];
  showScrollButton = false;

  constructor() { }

  ngOnInit(): void {
   this.filteredCats = this.cats;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['cats']) {
      this.filteredCats = [...this.cats];
    }
  }

   filterBreeds(searchTerm: string) {
    this.filteredCats = this.cats.filter(cat =>
      cat.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }



}
