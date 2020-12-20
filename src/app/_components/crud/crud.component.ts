import {first} from 'rxjs/operators';
import {CrudService} from '../../_services/crud.service';

export abstract class CrudComponent {

  loading = false;
  error = '';
  success = '';
  data: any;

  protected constructor(
    private crudService: CrudService,
  ) {

  }

  onInit(): void {
    this.loading = true;
    this.loadAll();
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this record?')) {
      this.crudService.delete(id)
        .subscribe(value => {
          this.success = 'Post deleted';
          this.loadAll();
        }, error1 => {
          this.error = 'Could not delete the post';
        });
    }
  }

  loadAll(): void {
    this.crudService.all().pipe(first()).subscribe(posts => {
      this.loading = false;
      this.data = posts.data;
    });
  }
}
