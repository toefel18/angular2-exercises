import {Component} from 'angular2/core';
import {AuthorsService} from './authors.service';
import {AutoGrowDirective} from './auto-grow.directive';
@Component({
    selector: 'authors',
    template: `
    <h1>Authors</h1>
    <input type="text" autoGrow />
    <ul>
        <li *ngFor="#author of authors">{{author}}</li>
    </ul>
    `,
    providers: [AuthorsService],
    directives: [AutoGrowDirective]
})
export class AuthorComponent {
    authors :string[];

    constructor(authorsService:AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}
