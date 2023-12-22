import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() onClick = new EventEmitter();

  constructor() {}

  /**
   * output event handler
   */
  onClickHandler() {
    this.onClick.emit();
  }
}
