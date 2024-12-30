import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBindingDemoComponent } from './post-binding-demo.component';

describe('PostBindingDemoComponent', () => {
  let component: PostBindingDemoComponent;
  let fixture: ComponentFixture<PostBindingDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostBindingDemoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostBindingDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
