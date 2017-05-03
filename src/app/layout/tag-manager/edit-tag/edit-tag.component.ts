import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService, DataService } from '../../../shared';

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit {
  private title = '';
  private body = '';
  private tagstr = '';
  private id: number;
  private sub: any;
  
  constructor(private api: ApiService, private dataService: DataService,
              private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id);
       let record = this.dataService.getById(this.id);
       this.title = record.title;
       this.body = record.body;
       this.tagstr = record.tags;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  delete() {
    this.api.delete('posts/'+this.id)
      .subscribe(res => {
        console.log(res);
        this.dataService.removeById(this.id);
        this.router.navigate(['/tag-manager']);
      });
  }

  submit() {
    let data = {
      title: this.title,
      body: this.body,
      tags: this.tagstr
    }
    this.api.put('posts/'+this.id, data)
      .subscribe((res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
        alert('Error ocurred: '+err.status);
      });
  }
}
