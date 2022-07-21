import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAppComponent } from './games-app.component';

describe('GamesAppComponent', () => {
  let component: GamesAppComponent;
  let fixture: ComponentFixture<GamesAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
