import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTemplateComponent } from './box-template.component';

describe('BoxTemplateComponent', () => {
  let component: BoxTemplateComponent;
  let fixture: ComponentFixture<BoxTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
