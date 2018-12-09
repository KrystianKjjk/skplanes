import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { FlightsService } from 'src/app/core/services/flights.service';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent {

  @ViewChild('flightForm') flightForm: FlightFormComponent;
  constructor(
    private flightsService: FlightsService,
    private toast: MatSnackBar,
    private dialogRef: MatDialogRef <NewFlightComponent>
  ) { }

createFlight()
{
  console.log(this.flightForm);
  this.flightsService.addFlight(this.flightForm.form.value)
  .then(this.onCreatingSuccess.bind(this), this.onCreatingFailure.bind(this));
}
private onCreatingSuccess()
{
  this.dialogRef.close();
  this.toast.open("Flight has been successfully created!", '', {panelClass: 'toast-success'});
}
private onCreatingFailure(error)
{
  this.toast.open(error.message, '', {panelClass: 'toast-error'});
}
}
