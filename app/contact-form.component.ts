import {Component} from 'angular2/core';

@Component({
    selector: 'contact-form',
    templateUrl: 'app/contact-form.component.html'
})
export class ContactFormComponent {
    periods = [
        {id: 1, name: "Daily"},
        {id: 2, name: "Weekly"},
        {id: 3, name: "Montly"}
    ];
    
    log(variable) {
        console.log(variable);
    }

    onSubmit(form) {
        console.log(form);
    } 
}
