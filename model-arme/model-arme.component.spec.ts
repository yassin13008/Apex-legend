import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelArmeComponent } from './model-arme.component';

describe('ModelArmeComponent', () => {
  let component: ModelArmeComponent;
  let fixture: ComponentFixture<ModelArmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelArmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelArmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
