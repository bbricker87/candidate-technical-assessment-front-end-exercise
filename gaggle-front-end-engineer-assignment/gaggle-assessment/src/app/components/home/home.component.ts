import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface GaggleIncident {
  id: number;
  date: Date;
  type: string;
  status: string;
}

const INCIDENT_DATA: GaggleIncident[] = [
  { id: 1, date: new Date('2023-01-20'), type: 'alert', status: 'open' },
];
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: string[] = ['select', 'date', 'type', 'status'];
  incidents = new MatTableDataSource<GaggleIncident>(INCIDENT_DATA);
  selection = new SelectionModel<GaggleIncident>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.incidents.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.incidents.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: GaggleIncident): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      row.id
    }`;
  }
}
