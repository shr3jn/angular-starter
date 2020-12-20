import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../post.service';
import {CreateComponent} from '../../_components/crud/create.component';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent extends CreateComponent implements OnInit{

  constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    protected postService: PostService) {
      super(formBuilder, route, router, postService, 'posts');
  }

  ngOnInit(): void {
    this.setForm({
      name: ['', Validators.required]
    });
  }

  getPostData(): any {
    return {
      name: this.f.name.value
    };
  }

}
