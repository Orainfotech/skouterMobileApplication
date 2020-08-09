import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StudiosPage } from './studios.page';

describe('StudiosPage', () => {
  let component: StudiosPage;
  let fixture: ComponentFixture<StudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
