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
  
  constructor(private api: ApiService, private data: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = params['id'];
       console.log(this.id);
       let record = this.data.getById(this.id);
       this.title = record.title;
       this.body = record.body;
       this.tagstr = record.tags;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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
