import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {UpdateComponent} from '../../_components/crud/update.component';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.scss']
})
export class UpdatePostComponent extends UpdateComponent implements OnInit {

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected postService: PostService
  ) {
    super(formBuilder, route, router, postService, 'posts');
  }

  ngOnInit(): void {
    this.read();
  }

  getUpdateData(data: any): any {
    return {
      name: [data.name, Validators.required]
    };
  }

  getPostData(): any {
    return {
      name: this.f.name.value
    };
  }
}
