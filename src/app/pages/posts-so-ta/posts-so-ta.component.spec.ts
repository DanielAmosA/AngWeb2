import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsSoTaComponent } from './posts-so-ta.component';

describe('PostsSoTaComponent', () => {
  let component: PostsSoTaComponent;
  let fixture: ComponentFixture<PostsSoTaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsSoTaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsSoTaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
