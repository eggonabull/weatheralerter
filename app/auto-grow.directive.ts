import {Directive} from 'angular2/core'
import {Renderer} from 'angular2/core'
import {ElementRef} form 'angular2/core'

@Directive({
	selector: '[autoGrow]',
	host: {
		'(focus)': 'onFocus()',
		'(blur)': 'onBlur()'
	}
})
export class AutoGrowDirective {

	constructor(private el: ElementRef, private renderer: Renderer)

	onFocus() {
		this.renderer.setElementStyle(this.el, 'width', '200');
	}

	onBlur() {
		this.renderer.setElementStyle(this.el, 'width', '120');
	}
}