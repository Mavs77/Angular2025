import { Component, HostListener, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class ButtonComponent {}
