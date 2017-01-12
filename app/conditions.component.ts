import {Component} from 'angular2/core'
import {ConditionService} from './condition.service'

@Component({
	selector: 'conditions',
	template: `
		<h2>Conditions</h2>
		<ul>
			<li *ngFor="#condition of conditions">{{ condition }}</li>
		</ul>
		`,
	providers: [ConditionService]
})
export class ConditionsComponent {
	conditions;

	constructor(conditionService: ConditionService) {
		this.conditions = conditionService.getConditions();
	}
}