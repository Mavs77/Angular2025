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
  encapsulation: ViewEncapsulation.None,
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
