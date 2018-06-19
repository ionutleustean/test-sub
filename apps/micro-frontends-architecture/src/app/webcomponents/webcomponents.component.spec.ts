import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebcomponentsComponent } from './webcomponents.component';

describe('WebcomponentsComponent', () => {
  let component: WebcomponentsComponent;
  let fixture: ComponentFixture<WebcomponentsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WebcomponentsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WebcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
