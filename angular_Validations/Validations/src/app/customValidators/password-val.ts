import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms"

export function matchPassword(): ValidatorFn {
    return(control: AbstractControl): ValidationErrors | null => {
        const password: string = control.get("password").value
        const passwordConfirm: string = control.get("passwordConfirm").value

        if(password != passwordConfirm) {
            return { "noMatch": true}
        }
        return null
    }
}