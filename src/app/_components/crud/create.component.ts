import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {CrudService} from '../../_services/crud.service';

export abstract class CreateComponent {

  createForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  abstract getPostData(): any;

  protected constructor(
    protected formBuilder: FormBuilder,
    protected route: ActivatedRoute,
    protected router: Router,
    private crudService: CrudService,
    private slug: string
  ) {

  }

  setForm(data: any): void {
    this.createForm = this.formBuilder.group(data);
  }

  onCreate(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.createForm.invalid) {
      return;
    }

    this.loading = true;

    const data = this.getPostData();

    this.crudService.create(data)
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
  get f() { return this.createForm.controls; }
}
