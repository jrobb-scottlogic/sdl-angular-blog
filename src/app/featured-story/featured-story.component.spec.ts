import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedStoryComponent } from './featured-story.component';

describe('FeaturedStoryComponent', () => {
  let component: FeaturedStoryComponent;
  let fixture: ComponentFixture<FeaturedStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedStoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeaturedStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
