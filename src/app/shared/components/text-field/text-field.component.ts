import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextFieldComponent implements OnInit {
  @Input() propsFormGroup: FormGroup
  @Input() propsFormControlName: string = ''
  @Input() label: string = '';
  @Input() type: string = 'text';
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
