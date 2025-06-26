import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SplashComponent } from './splash.component';
import { Router } from '@angular/router';

fdescribe('SplashComponent', () => {
  let component: SplashComponent;
  let fixture: ComponentFixture<SplashComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

    beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    await TestBed.configureTestingModule({
      imports: [SplashComponent, IonicModule],
      providers: [{ provide: Router, useValue: routerSpy }]
    }).compileComponents();

    fixture = TestBed.createComponent(SplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería navegar a /home después de 1 segundo', fakeAsync(() => {
    component.ngOnInit();

    tick(1000);

    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('/home', { replaceUrl: true });
  }));
});
