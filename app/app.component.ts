import {Component} from 'angular2/core';
import {AlertsComponent} from './alerts.component';
import {ConditionsComponent} from './conditions.component';
import {ArtistryService} from './artistry.service';

@Component({
    selector: 'my-app',
    template: `
    	<h1>Hello Angular</h1>
    	<alerts></alerts>
    	<conditions></conditions>,
    `,
    directives: [
    	AlertsComponent,
    	ConditionsComponent,
    	AutoGrowDirective
    ]
})
export class AppComponent { }