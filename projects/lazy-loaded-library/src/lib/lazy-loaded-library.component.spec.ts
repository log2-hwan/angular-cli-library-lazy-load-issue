import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadedLibraryComponent } from './lazy-loaded-library.component';

describe('LazyLoadedLibraryComponent', () => {
  let component: LazyLoadedLibraryComponent;
  let fixture: ComponentFixture<LazyLoadedLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadedLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadedLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
