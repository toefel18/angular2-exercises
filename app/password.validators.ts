import {Control, ControlGroup} from "angular2/common";

export class PasswordValidators {
    static complexPassword(control: Control) {
        const minLength = 5;
        // We bypass this validation rule if the field is empty, assuming
        // display only a single validation message at a time, rather than:
        //
        // * This field is required.
        // * Pass   // it is valid. At this point, the required validator will kick in
        // and asks the user to type a value. With this technique, we'll
        // word doesn't match complexity rules.
        if (control.value == '')
            return null;
        if (control.value.length < minLength) {
            return { complexPassword: {
                minLength: minLength
            }};
        }
        return null;
    }


    static passwordsMatch(group: ControlGroup) {
        if (group.find('newPassword').value == group.find('confirmPassword').value ) return null;

        return {passwordsMatch : true}
    }
}