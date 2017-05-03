import { Component, OnInit } from '@angular/core';

import { DataService } from '../../../shared';

@Component({
  selector: 'app-tags-export',
  templateUrl: './tags-export.component.html',
  styleUrls: ['./tags-export.component.scss']
})
export class TagsExportComponent implements OnInit {
  private data = [];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.data = this.dataService.getAll();
  }

}
