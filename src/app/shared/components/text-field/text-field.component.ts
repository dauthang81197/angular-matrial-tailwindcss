import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TextFieldComponent implements OnInit {
  @Input() label: string = '';
  value = '';
  constructor() { }

  ngOnInit(): void {
  }

}
