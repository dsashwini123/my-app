import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
 form: FormGroup;

 constructor(private fb: FormBuilder, private router: Router){
   this.form = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
   });
 }

get firstName(): FormControl {
  return this.form.get('firstName') as FormControl;
}

get lastName(): FormControl {
  return this.form.get('lastName') as FormControl;
}

// set firstName(value:string) {
//   this.form.get('firstName')?.setValue(value);
// }

// set lastName(value:string) {
//   this.form.get('lastName')?.setValue(value);
// }

 onSubmit(){
  if (this.form.valid) {
    this.router.navigate(['/next-page'], { state: {data: this.form.value } });
  }
 }
}
