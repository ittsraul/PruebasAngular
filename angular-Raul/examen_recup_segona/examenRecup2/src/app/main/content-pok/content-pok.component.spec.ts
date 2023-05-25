import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPokComponent } from './content-pok.component';

describe('ContentPokComponent', () => {
  let component: ContentPokComponent;
  let fixture: ComponentFixture<ContentPokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPokComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentPokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
