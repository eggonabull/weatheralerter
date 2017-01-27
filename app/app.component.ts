import {Component} from 'angular2/core';
import {AlertsComponent} from './alerts.component';
import {ConditionsComponent} from './conditions.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {StarComponent} from './star.component';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular</h1>
    	<alerts></alerts>
    	<conditions></conditions>
        <div (click)="onDivClick()">
            <button
                class="btn btn-primary"
                [style.backgroundColor]="isActive ? 'blue' : 'red'"
                (click)="onClick($event)"
                on-mouseover="onHover()">
                Submit
            </button>
        </div>
        <input 
            type="text"
            [value]="title"
            (input)="title = $event.target.value" />
        <h2>Preview: {{ title }}</h2>
        <input
            type="button"
            class="btn btn-primary"
            (click)="title = ''"
            value="Clear" />

        <input type="text" [(ngModel)]="title" />
        <input type="text" bindon-ngModel="title" />
        <star />
    `,
    directives: [
    	AlertsComponent,
    	ConditionsComponent,
        StarComponent
    ]
})
export class AppComponent {
    isActive = false;
    title = "Angular App"

    onDivClick() {
        console.log("handled by div");
    }

    onClick($event) {
        $event.stopPropagation();
        console.log("click", $event);
    }

    onHover() {
        console.log("onhover");
    }
}