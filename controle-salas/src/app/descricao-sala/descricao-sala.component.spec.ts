import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescricaoSalaComponent } from './descricao-sala.component';

describe('DescricaoSalaComponent', () => {
  let component: DescricaoSalaComponent;
  let fixture: ComponentFixture<DescricaoSalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescricaoSalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescricaoSalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
