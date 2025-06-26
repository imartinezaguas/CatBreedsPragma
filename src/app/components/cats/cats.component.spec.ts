import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatsComponent } from './cats.component';
import { CatsBreed } from 'src/app/interface/cats';

describe('CatsComponent', () => {
  let component: CatsComponent;
  let fixture: ComponentFixture<CatsComponent>;

    const mockCats: CatsBreed[] = [
    {
      id: '1',
      name: 'Bengal',
      cfa_url: '', vetstreet_url: '', vcahospitals_url: '',
      temperament: '', origin: '', country_codes: '', country_code: '',
      description: '', life_span: '', indoor: 0, lap: 0, alt_names: '',
      adaptability: 0, affection_level: 0, child_friendly: 0, dog_friendly: 0,
      energy_level: 0, grooming: 0, health_issues: 0, intelligence: 0,
      shedding_level: 0, social_needs: 0, stranger_friendly: 0, vocalisation: 0,
      experimental: 0, hairless: 0, natural: 0, rare: 0, rex: 0, suppressed_tail: 0,
      short_legs: 0, wikipedia_url: '', hypoallergenic: 0, reference_image_id: '',
      image: { id: '', width: 0, height: 0, url: '' },
      weight: { imperial: '', metric: '' }
    },
    {
      id: '2',
      name: 'Persian',
      cfa_url: '', vetstreet_url: '', vcahospitals_url: '',
      temperament: '', origin: '', country_codes: '', country_code: '',
      description: '', life_span: '', indoor: 0, lap: 0, alt_names: '',
      adaptability: 0, affection_level: 0, child_friendly: 0, dog_friendly: 0,
      energy_level: 0, grooming: 0, health_issues: 0, intelligence: 0,
      shedding_level: 0, social_needs: 0, stranger_friendly: 0, vocalisation: 0,
      experimental: 0, hairless: 0, natural: 0, rare: 0, rex: 0, suppressed_tail: 0,
      short_legs: 0, wikipedia_url: '', hypoallergenic: 0, reference_image_id: '',
      image: { id: '', width: 0, height: 0, url: '' },
      weight: { imperial: '', metric: '' }
    }
  ];

    beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatsComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CatsComponent);
    component = fixture.componentInstance;
    component.cats = mockCats;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar filteredCats en ngOnInit()', () => {
    component.ngOnInit();
    expect(component.filteredCats.length).toBe(2);
  });

  it('debería copiar los gatos a filteredCats en ngOnChanges()', () => {
    const changes = {
      cats: {
        currentValue: mockCats,
        previousValue: [],
        firstChange: true,
        isFirstChange: () => true
      }
    };
    component.ngOnChanges(changes);
    expect(component.filteredCats.length).toBe(2);
  });

  it('debería filtrar correctamente por nombre', () => {
    component.filterBreeds('beng');
    expect(component.filteredCats.length).toBe(1);
    expect(component.filteredCats[0].name).toBe('Bengal');
  });
});
