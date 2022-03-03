import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-demo-form-sku-form-builder',
  templateUrl: './demo-form-sku-form-builder.component.html',
  styleUrls: ['./demo-form-sku-form-builder.component.scss']
})
export class DemoFormSkuFormBuilderComponent implements OnInit {
  myForm!: FormGroup;
  sku: AbstractControl;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', [
        Validators.required,
        Validators.pattern(/^123/)
      ] ]
    });
    this.sku = this.myForm.controls['sku']

    this.sku.valueChanges.subscribe((value: string) => {
      console.log('sku change to: ',value)
    })

    this.myForm.valueChanges.subscribe((form:any)=>{
      console.log('Form change to: ',form)
    })
  }

  ngOnInit(): void {
  }
  onSubmit(value: string): void {
    console.log('Your form building value is: ', value)
  }

  

  

}

