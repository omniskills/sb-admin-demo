import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../../../shared';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.scss']
})
export class AddTagComponent implements OnInit {
  private title = '';
  private body = '';
  private tagstr = '';

  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    let data = {
      title: this.title,
      body: this.body,
      tags: this.tagstr
    }
    this.api.post('posts', data)
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigate(['/tag-manager']);
      },
      (err: any) => {
        console.log(err);
        alert('Error ocurred: '+err.status);
      });
  }
}
