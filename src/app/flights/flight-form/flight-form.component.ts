import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, MinLengthValidator } from '@angular/forms';
import { Crew, Flight } from 'src/app/models/flight.model';
import { flightCodeValidador } from './code.validator';

@Component({
  selector: 'app-flight-form',
  templateUrl: './flight-form.component.html',
  styleUrls: ['./flight-form.component.scss']
})
export class FlightFormComponent implements OnInit {
  @Input() editMode = false;
form: FormGroup;
jobs = [
  { label: 'stwaredess', value: 'stwaredess'},
  { label: 'Senior Cabin Crew', value: 'Senior_cabin_crew'},
  { label: 'Pilot', value: 'pilot'},
  { label: 'Co-Pilot', value: 'co_pilot'},
  { label: 'Mechanic', value: 'mechanic'},
]
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buidForm();
  }
  get crew()
  {
    return this.form.get('crew') as FormArray;
  }
  setFlight(flight: Flight)
  {
    const {key, ...formData} = flight;
    this.form.patchValue(formData);
    formData.crew.forEach(crewMember =>this.addCrewMember(crewMember));
  }
  removeCrewMember(I: number)
  {
    this.crew.removeAt(I);
  }
  addCrewMember(crewMember?: Crew)
  {
    this.crew.push(this.buildCrewMember(crewMember));
  }
  buildCrewMember (crewMember: Crew = {} as Crew)
  {
    return this.formBuilder.group({
      name: crewMember.name || '',
      job: crewMember.job || ''
    })
  }
  private buidForm()
  {
    this.form = this.formBuilder.group({
        origin: ['',{validators:[Validators.required]}],
        destination: ['',{validators:[Validators.required]}],
        departureTime: ['',{validators:[Validators.required]}],
        returnTime: ['',{validators:[Validators.required]}],
        code: ['SK',{
          validators:[
            Validators.required, 
            Validators.minLength(4), 
            Validators.maxLength(7),
            flightCodeValidador
          ]
        }],
        additionalInformation: '',
        withSKPlanesDiscount: false,
        crew: this.formBuilder.array(this.editMode ?[] : [this.buildCrewMember()])
    })
  }
}
