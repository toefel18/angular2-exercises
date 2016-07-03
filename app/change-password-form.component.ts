import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common";
import {PasswordValidators} from './password.validators';

@Component({
    selector: 'change-password',
    templateUrl: 'app/change-password-form.component.html'
})
export class ChangePasswordFormComponent {
    form: ControlGroup;

    constructor(fb:FormBuilder) {
        this.form = fb.group({
            currentPassword: ['', Validators.required],
            newPassword: ['', Validators.compose([
                Validators.required,
                PasswordValidators.complexPassword
                ])],
            confirmPassword: ['', Validators.compose([
                Validators.required
            ])]
        }, {validator: PasswordValidators.passwordsMatch});
    }

    changePassword(){
        let currentPassword = this.form.find('currentPassword');
        if (currentPassword.value != '1234') {
            currentPassword.setErrors({
                invalidPassword: true
            })
        } else {
            alert("Password changed");
        }
        console.log(this.form.value);
    }

}