import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  developerForm!: FormGroup;
  frameworks: any = [
    {name:'angular', version: ['1.1.1', '1.2.1', '1.3.3']},
    {name:'react', version: ['2.1.2', '3.2.4', '4.3.1']},
    {name:'vue', version: ['3.3.1', '5.2.1', '5.1.3']},
  ]

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    console.log(this.developerForm);
    this.initializeForm();
  }

  initializeForm() : void {
    this.developerForm = this.fb.group({
      firstName : '',
      lastName : '',
      preferFramework: '',
      
      hobby: this.fb.array([this.fb.control('')])
    })
  }

  onSubmit(): void {
    console.log(this.developerForm);
  }

  selectedFramework(event: any): void {
    this.developerForm.patchValue({
      preferFramework: event.target.value
    })
  }

  addHobby(): void {
    this.hobby.push(this.fb.control(''));
  }

  removeHobby(index: number) : void {
    this.hobby.removeAt(index);
  }

  get hobby(): FormArray {
    return this.developerForm.get('hobby') as FormArray;
  }
}

// this.developerForm = new FormGroup({
//   firstName : new FormControl(null, Validators.required),
//   lastName : new FormControl(null, Validators.required),
// })
