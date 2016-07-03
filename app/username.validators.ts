import {Control, ControlGroup} from "angular2/common";

export class UsernameValidators {
    static cannotContainSpace(control: Control) {
        if (control.value.indexOf(' ') >= 0) return {cannotContainSpace: true};
        return null;
    }

    static shouldBeUnique(control: Control) {
        return new Promise((resolve, reject) => {
            setTimeout(()=> {
                if (control.value == "Christophe") {
                    resolve({shouldBeUnique: true});
                } else {
                    resolve (null);
                }
            }, 1000);
        });
    }
}