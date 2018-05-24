import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  sampleForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.sampleForm = this.fb.group({
      sampleCheckbox: ['', [Validators.required]],
    });
  }

}
