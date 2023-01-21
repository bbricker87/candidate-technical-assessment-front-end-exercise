import { Component, OnInit } from '@angular/core';
import { IActionButton } from '@app/interfaces/IActionButton';

@Component({
  selector: 'app-page-actions',
  templateUrl: './page-actions.component.html',
  styleUrls: ['./page-actions.component.scss'],
})
export class PageActionsComponent implements OnInit {
  public leftButtons: IActionButton[] = [];
  public rightButtons: IActionButton[] = [];

  ngOnInit() {
    this.leftButtons = [
      {
        label: 'Button 1',
        hasRightChevron: true,
        icon: 'search',
      },
      {
        label: 'Button 2',
        hasRightChevron: true,
        icon: 'cloud_sync',
      },
      {
        label: 'Button 3',
        hasRightChevron: true,
        icon: 'receipt_long',
      },
    ];
    this.rightButtons = [
      {
        label: 'Filter by Keyword',
        placeholder: 'Find...',
        icon: 'filter_alt',
        size: 'xl',
      },
      {
        label: 'Export',
        hasDropdown: true,
        icon: 'download',
      },
    ];
  }
}
