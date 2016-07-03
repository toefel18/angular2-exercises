import {Component} from 'angular2/core';
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common";
import {UsernameValidators} from './username.validators';

@Component({
    selector: 'signup-form',
    templateUrl: 'app/signup-form.component.html'
})
export class SignUpFormComponent {

    // (REVIEW NEW API)
    // prefer formbuilder
    // form = new ControlGroup({
    //     username: new Control('', Validators.required),
    //     password: new Control('', Validators.required)
    // });

    form: ControlGroup;

    constructor(fb:FormBuilder) {
        this.form = fb.group({
            username: ['', Validators.compose([
                Validators.required,
                UsernameValidators.cannotContainSpace
            ]), UsernameValidators.shouldBeUnique], // shouldBeUnique is an async validator
            password: ['', Validators.required]
        });
    }

    signup(){
        // let result = authService.login(this.form.value);
        this.form.find('username').setErrors({
            invalidLogin: true
        });

        console.log(this.form.value);
    }
}