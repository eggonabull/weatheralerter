import {Component} from 'angular2/core';
import {AlertsComponent} from './alerts.component';
import {ConditionsComponent} from './conditions.component';
import {AutoGrowDirective} from './auto-grow.directive';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular</h1>
    	<alerts></alerts>
    	<conditions></conditions>
        <button
            class="btn btn-primary"
            [style.backgroundColor]="isActive ? 'blue' : 'red'"
            (click)="onClick()"
            on-mouseover="onHover()">Submit</button>
    `,
    directives: [
    	AlertsComponent,
    	ConditionsComponent
    ]
})
export class AppComponent {
    isActive = false;

    onClick() {
        console.log("click");
    }

    onHover() {
        console.log("onhover");
    }
}