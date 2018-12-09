import { Component, ViewChild } from '@angular/core';
import { FlightsService } from 'src/app/core/services/flights.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightFormComponent } from '../flight-form/flight-form.component';
import { tap } from 'rxjs/operators';
import { Flight } from 'src/app/models/flight.model';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent  {
  @ViewChild('flightForm') flightForm: FlightFormComponent;
  flight: Flight;
  constructor(
    private route: ActivatedRoute,
    private toast: MatSnackBar,
    private router: Router,
    private flightsService: FlightsService
  ) { }

  ngAfterViewInit() {
    this.loadFlight();
  }
  removeFlight()
  {
    this.flightsService.removeFlight(this.flight.key).then(this.onRemoveSuccess.bind(this), this.OnFailure.bind(this))
  }

  editFlight()
  {
    this.flightsService.editFlight(this.flight.key,this.flightForm.form.value)
    .then(this.onEditSuccess.bind(this), this.OnFailure.bind(this));
  }
  private onEditSuccess()
  {
    this.router.navigate(["/dashboard"]);
    this.toast.open("Flight has been successfully edited", '', {panelClass: "toast-success"});
  }
  private onRemoveSuccess()
  {
    this.router.navigate(["/dashboard"]);
    this.toast.open("Flight has been successfully removed", '', {panelClass: "toast-success"});
  }
  private OnFailure(error)
  {
    this.toast.open(error.message, '', {panelClass: "toast-error "});
  }
  private loadFlight()
  {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
    .pipe(tap(flight =>this.flightForm.setFlight(flight)))
      .subscribe(flight => this.flight = flight)
    
  }
}
