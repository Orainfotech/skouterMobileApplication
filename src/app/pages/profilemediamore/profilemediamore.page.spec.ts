import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilemediamorePage } from './profilemediamore.page';

describe('ProfilemediamorePage', () => {
  let component: ProfilemediamorePage;
  let fixture: ComponentFixture<ProfilemediamorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemediamorePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilemediamorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
