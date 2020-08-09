import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfilemediaPage } from './profilemedia.page';

describe('ProfilemediaPage', () => {
  let component: ProfilemediaPage;
  let fixture: ComponentFixture<ProfilemediaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilemediaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilemediaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
