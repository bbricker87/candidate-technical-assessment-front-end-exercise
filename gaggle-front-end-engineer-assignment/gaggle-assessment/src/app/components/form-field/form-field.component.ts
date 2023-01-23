import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gaggle-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent {
  public hasFocus = false;
  public displayType = 'text';

  @Input() id: string = '';
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');
  @Input() patternError?: string = '';
  @Input() displayTypeToggle?: boolean = false;

  ngOnInit() {
    this.displayType = this.type;
  }

  togglePassword = () => {
    if (this.displayType === 'text') {
      this.displayType = 'password';
    } else {
      this.displayType = 'text';
    }
  };

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
