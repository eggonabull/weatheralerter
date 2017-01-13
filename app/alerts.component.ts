import {Component} from 'angular2/core'
import {AlertService} from './alert.service'
import {AutoGrowDirective} from './'

@Component({
	selector: 'alerts',
	template: `
		<h2>Alerts</h2>
		{{ title }}
		<input type="text" autoGrow />
		<ul>
			<li *ngFor="#alert of alerts">{{alert}}</li>
		</ul>
		`,
	providers: [AlertService],
	directives: [AutoGrowDirective]
})
export class AlertsComponent {
	title: string = "The title of the Alerts Page";
	alerts;

	constructor(alertService: AlertService) {
		this.alerts = alertService.getAlerts();
	}
}