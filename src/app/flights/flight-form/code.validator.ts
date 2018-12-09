import { FormControl, ValidationErrors } from "@angular/forms";

export const flightCodeValidador = (formControl: FormControl): ValidationErrors | null =>{
    return (formControl.value as string).startsWith("SK") ? null : { incorrentCode: true};
}