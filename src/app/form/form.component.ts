import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  developerForm!: FormGroup;
  preferVersion: any;
  preferVersionDisablet: string = '';
  frameworks: any = [
    {name:'angular', version: ['1.1.1', '1.2.1', '1.3.3']},
    {name:'react', version: ['2.1.2', '3.2.4', '4.3.1']},
    {name:'vue', version: ['3.3.1', '5.2.1', '5.1.3']},
  ]

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() : void {
    this.developerForm = this.fb.group({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      preferFramework: new FormControl({value: ''}, Validators.required),
      preferVersion: new FormControl({value: ''}, Validators.required),
      hobby: this.fb.array([this.fb.control('')], Validators.required)
    })
  }

  onSubmit(): void {
    console.log(this.developerForm);
  }

  selectedFramework(event: any): void {
    this.developerForm.patchValue({
      preferFramework: event.target.value
    })

    this.preferVersionDisablet = "Select version:";

    this.preferVersion = this.frameworks
      .find((framework: any) => framework.name === event.target.value).version;
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
