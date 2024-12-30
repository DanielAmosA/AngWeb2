import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindLoadDataComponent } from './kind-load-data.component';

describe('KindLoadDataComponent', () => {
  let component: KindLoadDataComponent;
  let fixture: ComponentFixture<KindLoadDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KindLoadDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KindLoadDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
