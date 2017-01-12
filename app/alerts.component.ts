import {Component} from 'angular2/core'
import {AlertService} from './alert.service'

@Component({
	selector: 'alerts',
	template: `
		<h2>Alerts</h2>
		{{ title }}
		<ul>
			<li *ngFor="#alert of alerts">{{alert}}</li>
		</ul>
		`,
	providers: [AlertService]
})
export class AlertsComponent {
	title: string = "The title of the Alerts Page";
	alerts;

	constructor(alertService: AlertService) {
		this.alerts = alertService.getAlerts();
	}
}