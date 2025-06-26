import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CatComponent } from './cat.component';
import { CatsBreed } from 'src/app/interface/cats';
import { Router } from '@angular/router';

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  const mockCat: CatsBreed = {
  id: 'abc123',
  name: 'Bengal',
  cfa_url: '',
  vetstreet_url: '',
  vcahospitals_url: '',
  temperament: '',
  origin: '',
  country_codes: '',
  country_code: '',
  description: '',
  life_span: '',
  indoor: 0,
  lap: 0,
  alt_names: '',
  adaptability: 0,
  affection_level: 0,
  child_friendly: 0,
  dog_friendly: 0,
  energy_level: 0,
  grooming: 0,
  health_issues: 0,
  intelligence: 0,
  shedding_level: 0,
  social_needs: 0,
  stranger_friendly: 0,
  vocalisation: 0,
  experimental: 0,
  hairless: 0,
  natural: 0,
  rare: 0,
  rex: 0,
  suppressed_tail: 0,
  short_legs: 0,
  wikipedia_url: '',
  hypoallergenic: 0,
  reference_image_id: '',
  image: {
    id: 'img1',
    width: 400,
    height: 300,
    url: 'https://fakeimage.com/gato.jpg'
  },
  weight: {
    imperial: '10 - 15',
    metric: '4 - 7'
  }
};


  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [CatComponent, IonicModule],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    component.cat = mockCat;
    component.index = 1;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería tener los datos del gato correctamente', () => {
    expect(component.cat.name).toBe('Bengal');
    expect(component.cat.id).toBe('abc123');
  });

  it('debería navegar al detalle del gato al ejecutar openDescription()', () => {
    component.openDescription();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/cat', 'abc123']);
  });

});
