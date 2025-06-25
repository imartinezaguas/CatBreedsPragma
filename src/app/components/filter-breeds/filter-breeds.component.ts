import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-filter-breeds',
  templateUrl: './filter-breeds.component.html',
  imports: [CommonModule, IonicModule],
  styleUrls: ['./filter-breeds.component.scss'],
})
export class FilterBreedsComponent  {

  @Output() onSearch = new EventEmitter<string>();

  constructor() { }


  handleInput(event: any) {
    const value = event.detail.value.trim();
    this.onSearch.emit(value);
  }

}
