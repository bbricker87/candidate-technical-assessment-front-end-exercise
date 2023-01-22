import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroupDirective,
} from '@angular/forms';

@Component({
  selector: 'gaggle-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  public hasFocus = false;

  @Input() id: string = '';
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');
  @Input() patternError?: string = '';

  ngOnInit(): void {}

  ngOnChanges() {
    console.log(this.control);
  }

  onFocus = () => {
    this.hasFocus = true;
  };

  onBlur = () => {
    this.hasFocus = false;
  };

  clearValue = () => {
    this.control.reset();
  };
}
