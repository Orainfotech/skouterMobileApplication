import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindpeoplePage } from './findpeople.page';

describe('FindpeoplePage', () => {
  let component: FindpeoplePage;
  let fixture: ComponentFixture<FindpeoplePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindpeoplePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindpeoplePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
