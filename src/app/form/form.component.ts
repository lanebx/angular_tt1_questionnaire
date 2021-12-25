import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';


interface Framework {
  name: string, 
  version: string[],
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {
  developerForm!: FormGroup;
  preferVersion?: string[];
  preferVersionDisablet!: string;
  addHobiesDisablet!: string;
  emailMessage = '';

  frameworks: Framework[] = [
    {name:'angular', version: ['1.1.1', '1.2.1', '1.3.3']},
    {name:'react', version: ['2.1.2', '3.2.4', '4.3.1']},
    {name:'vue', version: ['3.3.1', '5.2.1', '5.1.3']},
  ];

  emailFromServer: string[] = ['test2@test.test']

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm() : void {
    this.preferVersionDisablet = '';
    this.addHobiesDisablet = '';

    this.developerForm = this.fb.group({
      firstName : new FormControl('', Validators.required),
      lastName : new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      email : new FormControl('', [Validators.email]),
      preferFramework: new FormControl('', Validators.required),
      preferVersion: new FormControl('', Validators.required),
      hobby: this.fb.array([this.fb.control('', Validators.required)])
    })
  }

  onSubmit(): void {
    console.log(this.developerForm);

    this.initializeForm();
  }

  selectedFramework(event: any): void {
    this.developerForm.patchValue({
      preferFramework: event.target.value
    })

    this.preferVersionDisablet = "Select version:";

    this.preferVersion = this.frameworks.find((framework: Framework) => framework.name === event.target.value)?.version;
  }

  checkEmail(event: any) : void {
    this.emailMessage = 'Loaging...';

    setTimeout(() => {
      if (this.emailFromServer.includes(event.target.value)) {
        this.emailMessage = 'This email is registered please choose another';
      } else {
        this.emailMessage = '';
      }
    },2000);
  }

  addHobby(): void {
    if (this.hobby.value.every((item: any) => item.length >= 1)) {
      this.addHobiesDisablet = ''
      this.hobby.push(this.fb.control(''));
    } else {
      this.addHobiesDisablet = 'empty field';
    }
  }

  removeHobby(index: number) : void {
    this.hobby.removeAt(index);
  }

  get hobby(): FormArray {
    return this.developerForm.get('hobby') as FormArray;
  }
}
