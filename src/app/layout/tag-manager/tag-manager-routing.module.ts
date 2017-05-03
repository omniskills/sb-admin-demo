import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagManagerComponent } from './tag-manager.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { TagListComponent } from './tag-list/tag-list.component';
import { TagsExportComponent } from './tags-export/tags-export.component';

const routes: Routes = [
  {
    path: '',
    component: TagManagerComponent,
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'add',
        component: AddTagComponent
      },
      {
        path: 'edit/:id',
        component: EditTagComponent
      },
      {
        path: 'export',
        component: TagsExportComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagManagerRoutingModule { }
