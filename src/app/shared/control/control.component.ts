import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  ViewEncapsulation,
  afterNextRender,
  afterRender,
} from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  host: {
    class: 'control',
  },
  encapsulation: ViewEncapsulation.None,
  // In this component we adjusted the default setting for encapsulation from "Emulated" to "None" to allow for the css in this component to be available globally. In the view link we have content projection via ng-content but the instructor stated that Angular can only understand what it see and can't predict what content will be pass through and projected in the final rendering. This is one way to bypass this hiccup.
})
export class ControlComponent implements AfterContentInit {
  @Input({ required: true }) label!: string;

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >;

  constructor() {
    afterRender(() => {
      // console.log('afterRender');
    });

    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  ngAfterContentInit() {
    //...
  }

  onClick() {
    console.log(this.control);
  }
}
