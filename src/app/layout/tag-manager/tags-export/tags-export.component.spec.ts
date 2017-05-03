import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsExportComponent } from './tags-export.component';

describe('TagsExportComponent', () => {
  let component: TagsExportComponent;
  let fixture: ComponentFixture<TagsExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsExportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagsExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
