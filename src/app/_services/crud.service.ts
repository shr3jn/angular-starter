import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient, private slug: string) { }

  all() {
    return this.http.get<any>(`${environment.apiUrl}/${this.slug}`);
  }

  create(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/${this.slug}`, data);
  }

  read(id: string) {
    return this.http.get<any>(`${environment.apiUrl}/${this.slug}/${id}`);
  }

  update(id: string, data: any) {
    return this.http.put<any>(`${environment.apiUrl}/${this.slug}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete<any>(`${environment.apiUrl}/${this.slug}/${id}`);
  }
}
