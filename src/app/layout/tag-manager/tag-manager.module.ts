import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TagManagerRoutingModule } from './tag-manager-routing.module';
import { TagManagerComponent } from './tag-manager.component';

import { PageHeaderModule, SharedPipesModule } from '../../shared';
import { AddTagComponent } from './add-tag/add-tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { TagsExportComponent } from './tags-export/tags-export.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    PageHeaderModule,
    SharedPipesModule,
    TagManagerRoutingModule,
  ],
  declarations: [TagManagerComponent, AddTagComponent, TagListComponent, EditTagComponent, TagsExportComponent]
})
export class TagManagerModule { }
