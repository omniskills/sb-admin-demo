import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
	private store = [];
  private page = 0;
  private perPage = 10;
  private paginated = new BehaviorSubject<any>([]);

	constructor() {
    this.setPaginated();
  }

	public get count() {
		return this.store.length;
	}

	public get paginated$() {
		return this.paginated;
	}

  public get page$() {
    return this.page;
  }

	public get pageCount() {
		return Math.ceil(this.store.length/this.perPage);
	}

  public get startIndex() {
    return this.page*this.perPage;
  }

  private setPaginated() {
    this.paginated.next(
      this.store.slice(this.page*this.perPage, (this.page+1)*this.perPage)
    );
  }

	public setData(data) {
		this.store = data.slice();
    this.setPaginated();
	}

  public setPage(page) {
    this.page = page;
    this.setPaginated();
  }

  public setPerPage(perPage) {
    this.perPage = perPage;
    this.setPaginated();
  }

  public removeById(id) {
    this.store = this.store.filter((elem: any) => elem._id!==id);
    this.setPaginated();
  }

  public getById(id) {
    let filtered = this.store.filter((elem: any) => elem._id===id);
    if (filtered) {
      return filtered[0];
    } else {
      return null;
    }
  }

  public getAll() {
    return this.store;
  }
}
