import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryFormComponent } from './catergory-form.component';

describe('CatergoryFormComponent', () => {
  let component: CatergoryFormComponent;
  let fixture: ComponentFixture<CatergoryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatergoryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatergoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
