import { Component, OnInit } from '@angular/core';
import {PostService} from '../post.service';
import {first} from 'rxjs/operators';
import {Post} from '../../_models/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-read-post',
  templateUrl: './read-post.component.html',
  styleUrls: ['./read-post.component.scss']
})
export class ReadPostComponent implements OnInit {

  loading = false;
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id');
    this.postService.read(id).pipe(first()).subscribe(post => {
      this.loading = false;
      this.post = post.data;
    });
  }

}
