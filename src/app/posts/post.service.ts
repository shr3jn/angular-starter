import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CrudService} from '../_services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class PostService extends CrudService{

  constructor(httpClient: HttpClient) {
    super(httpClient, 'posts');
  }
}
