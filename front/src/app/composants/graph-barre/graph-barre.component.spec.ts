import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphBarreComponent } from './graph-barre.component';

describe('GraphBarreComponent', () => {
  let component: GraphBarreComponent;
  let fixture: ComponentFixture<GraphBarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphBarreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
