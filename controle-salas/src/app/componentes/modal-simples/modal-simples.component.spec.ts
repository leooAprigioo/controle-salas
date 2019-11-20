import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSimplesComponent } from './modal-simples.component';

describe('ModalSimplesComponent', () => {
  let component: ModalSimplesComponent;
  let fixture: ComponentFixture<ModalSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
