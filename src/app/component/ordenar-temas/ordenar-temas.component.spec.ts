import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarTemasComponent } from './ordenar-temas.component';

describe('OrdenarTemasComponent', () => {
  let component: OrdenarTemasComponent;
  let fixture: ComponentFixture<OrdenarTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdenarTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
