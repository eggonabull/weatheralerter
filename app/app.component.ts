import {Component} from 'angular2/core';
import {AlertsComponent} from './alerts.component';
import {ConditionsComponent} from './conditions.component';
import {AutoGrowDirective} from './auto-grow.directive';
import {StarComponent} from './star.component';
import {HeartComponent} from './heart.component';
import {VoterComponent} from './voter.component';

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
        <input type="text" bindon-ngModel="title" /><br />
        <i class="glyphicon glyphicon-star"></i>
        <star
            [is-favorite]="post.isFavorite"
            (change)="onFavoriteChange($event)"></star>
        <br /><br />
        <heart like-count=10></heart>
        <br />
        <voter></voter><br />
        <tweets></tweets>
    `,
    directives: [
    	AlertsComponent,
    	ConditionsComponent,
        StarComponent,
        HeartComponent,
        VoterComponent
    ]
})
export class AppComponent {
    isActive = false;
    title = "Angular App"

    post = {
        title: "Title",
        isFavorite: true
    }

    onFavoriteChange($event) {
        console.log($event);
    }

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