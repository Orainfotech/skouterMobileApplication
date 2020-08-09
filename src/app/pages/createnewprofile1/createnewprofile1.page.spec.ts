import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Createnewprofile1Page } from './createnewprofile1.page';

describe('Createnewprofile1Page', () => {
  let component: Createnewprofile1Page;
  let fixture: ComponentFixture<Createnewprofile1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Createnewprofile1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Createnewprofile1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
