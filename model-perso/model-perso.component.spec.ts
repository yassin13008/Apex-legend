import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPersoComponent } from './model-perso.component';

describe('ModelPersoComponent', () => {
  let component: ModelPersoComponent;
  let fixture: ComponentFixture<ModelPersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPersoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
