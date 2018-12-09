import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../core/services/flights.service';
import { Observable } from 'rxjs';
import { Flight } from '../models/flight.model';
import { MatDialog } from '@angular/material';
import { NewFlightComponent } from './new-flight/new-flight.component';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent  {

  flights$: Observable<Flight[]> = this.flightsService.getFlights();

  constructor(
    private dialog: MatDialog,
    private flightsService: FlightsService) { }

  openNewFlightModel()
  {
    this.dialog.open(NewFlightComponent);
  }

  showDetails(flight)
  {
    this.dialog.open(DetailsComponent, {data: flight});
  }
}
