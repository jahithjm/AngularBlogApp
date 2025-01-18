import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatNavbarComponent } from './cat-navbar.component';

describe('CatNavbarComponent', () => {
  let component: CatNavbarComponent;
  let fixture: ComponentFixture<CatNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
