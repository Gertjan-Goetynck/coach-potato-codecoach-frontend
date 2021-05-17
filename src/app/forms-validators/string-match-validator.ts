import { AbstractControl } from "@angular/forms";

export function stringMatchValidator(control: AbstractControl) {
    const string: string = control.get('password').value;
    const confirmString: string = control.get('confirmPassword').value;
    if (string !== confirmString) {
        control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
}