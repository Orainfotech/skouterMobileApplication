import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileinsightPage } from './profileinsight.page';

describe('ProfileinsightPage', () => {
  let component: ProfileinsightPage;
  let fixture: ComponentFixture<ProfileinsightPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileinsightPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileinsightPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
