import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilemediaactivityPage } from './profilemediaactivity.page';

describe('ProfilemediaactivityPage', () => {
  let component: ProfilemediaactivityPage;
  let fixture: ComponentFixture<ProfilemediaactivityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemediaactivityPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilemediaactivityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
