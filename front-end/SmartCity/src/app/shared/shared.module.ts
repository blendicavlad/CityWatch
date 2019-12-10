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
  MatSidenavModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SatDatepickerModule, SatNativeDateModule } from 'saturn-datepicker';

@NgModule({
  declarations: [],
  imports: [
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
    MatSidenavModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatTableModule,
    MatMenuModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
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
    MatTooltipModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule
  ]
})
export class SharedModule {}