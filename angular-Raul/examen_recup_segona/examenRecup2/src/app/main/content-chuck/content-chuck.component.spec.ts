import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentChuckComponent } from './content-chuck.component';

describe('ContentChuckComponent', () => {
  let component: ContentChuckComponent;
  let fixture: ComponentFixture<ContentChuckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentChuckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentChuckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
