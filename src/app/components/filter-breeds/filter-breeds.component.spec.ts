import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterBreedsComponent } from './filter-breeds.component';

describe('FilterBreedsComponent', () => {
  let component: FilterBreedsComponent;
  let fixture: ComponentFixture<FilterBreedsComponent>;

beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterBreedsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterBreedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería emitir el término de búsqueda cuando se llama handleInput()', () => {
    spyOn(component.onSearch, 'emit');

    const fakeEvent = {
      detail: {
        value: '  gato '
      }
    };

    component.handleInput(fakeEvent);

    expect(component.onSearch.emit).toHaveBeenCalledWith('gato');
  });
});
