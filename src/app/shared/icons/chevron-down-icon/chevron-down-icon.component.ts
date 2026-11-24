import { Component, input } from '@angular/core';

@Component({
  selector: 'app-chevron-down-icon',
  template: `
    <svg
      [attr.fill]="fill()"
      [class]="iconClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  `,
})
export class ChevronDownIconComponent {
  readonly fill = input<string>('none');
  readonly iconClass = input<string>('');
}

