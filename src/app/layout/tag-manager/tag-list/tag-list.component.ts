import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DataService, ApiService } from '../../../shared';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagListComponent implements OnInit {
  private data = [];
  private subscriber: any;
  private startIndex = 0;
  private totalCount = 0;
  private page = 0;
  private perPage = 10;
  private search_str = '';
  private keywords = '';

  constructor(private dataService: DataService, private api: ApiService) {
    this.subscriber = this.dataService.paginated$.subscribe(data => {
      this.data = data;
      this.startIndex = this.dataService.startIndex;
      this.totalCount = this.dataService.count;
      this.page = this.dataService.page$;
    });
    this.dataService.setPerPage(this.perPage);
    this.api.get('posts')
      .subscribe((res: any) => {
        console.log(res);
        this.dataService.setData(res);
      },
      err => console.log(err));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }

  changePage(page) {
    this.page = page;
    this.dataService.setPage(page-1);
  }

  search() {
    let search = this.search_str.replace(/[,\s]+/g, ' ');
    this.api.post('posts/search', {search})
      .subscribe(res => {
        this.page = 0;
        this.keywords = search;
        this.dataService.setData(res);
      });
  }
}
