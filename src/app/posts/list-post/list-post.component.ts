import {Component, OnInit} from '@angular/core';
import {PostService} from '../post.service';
import {CrudComponent} from '../../_components/crud/crud.component';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.scss']
})
export class ListPostComponent extends CrudComponent implements OnInit {

  constructor(protected postService: PostService) {
    super(postService);
  }

  ngOnInit(): void {
    super.onInit();
  }

}
