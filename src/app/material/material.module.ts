import { NgModule } from '@angular/core';
import {
  MatIconModule, 
  MatCardModule, 
  MatFormFieldModule, 
  MatInputModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatCheckboxModule, 
  MatSelectModule, 
  MatToolbarModule, 
  MatSnackBarModule, 
  MatDialogConfig, 
  MAT_DIALOG_DEFAULT_OPTIONS,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig,  
} from '@angular/material'

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: "700px",
  disableClose: true,
  hasBackdrop: true
};
const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition:'center'
};

const MATERIAL_MODULES = 
[
  MatIconModule,
  MatCardModule, 
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatSnackBarModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule
]
@NgModule({
  exports: [...MATERIAL_MODULES],
  declarations: [],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ]
  
})
export class MaterialModule { }
