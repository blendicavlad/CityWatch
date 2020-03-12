import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatTableModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatGridListModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTabsModule,
  MatSortModule,
  MatDialogModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  MatSidenavModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const IMPORTS_EXPORTS = [
  CommonModule,
  MatToolbarModule,
  SatDatepickerModule,
  SatNativeDateModule,
  MatTableModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatDividerModule,
  MatSlideToggleModule,
  MatSelectModule,
  MatGridListModule,
  MatDatepickerModule,
  MatRadioModule,
  MatTabsModule,
  MatSortModule,
  MatDialogModule,
  MatPaginatorModule,
  MatExpansionModule,
  MatTooltipModule,
  MatCardModule,
  FormsModule,
  ReactiveFormsModule,
  MatSidenavModule,
  FontAwesomeModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [],
  imports: IMPORTS_EXPORTS,
  exports: IMPORTS_EXPORTS
})
export class SharedModule {}
