import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureFormComponent } from './furniture-form.component';

describe('FurnitureFormComponent', () => {
  let component: FurnitureFormComponent;
  let fixture: ComponentFixture<FurnitureFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FurnitureFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
