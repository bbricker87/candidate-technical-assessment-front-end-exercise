import { Component, Input } from '@angular/core';
import { IActionButton } from '@app/interfaces/IActionButton';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.scss'],
  host: { class: 'm-buttonGroup' },
})
export class ButtonGroupComponent {
  @Input() public buttons: IActionButton[] = [];
}
