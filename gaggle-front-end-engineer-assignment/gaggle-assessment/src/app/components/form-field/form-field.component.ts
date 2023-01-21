import { Component, Input } from '@angular/core';

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
  @Input() value: string = '';
  @Input() error: string = 'test';
  @Input() isValid: boolean = true;

  onFocus = () => {
    this.hasFocus = true;
  };

  onBlur = () => {
    this.hasFocus = false;
  };

  clearValue = () => {
    this.value = '';
  };
}
