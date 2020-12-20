import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {CrudService} from '../../_services/crud.service';

export abstract class UpdateComponent {

  updateForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  id: string;

  abstract getPostData(): any;
  abstract getUpdateData(data: any): any;

  protected constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    private crudService: CrudService,
    private slug: string
  ) {

  }

  read(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.crudService.read(this.id)
      .subscribe(value => {
        this.updateForm = this.formBuilder.group(this.getUpdateData(value.data));
      }, error1 => {
        console.log(error1);
      });
  }

  setForm(data: any): void {
    this.updateForm = this.formBuilder.group(data);
  }

  onUpdate(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.updateForm.invalid) {
      return;
    }

    this.loading = true;

    const data = this.getPostData();

    this.crudService.update(this.id, data)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate([`/${this.slug}`]);
        },
        error: error => {
          this.error = error;
          this.loading = false;
        }
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.updateForm.controls; }
}
