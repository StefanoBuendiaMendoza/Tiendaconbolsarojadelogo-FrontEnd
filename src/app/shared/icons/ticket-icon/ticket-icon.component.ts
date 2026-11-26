import { Component, input } from '@angular/core';

@Component({
  selector: 'app-ticket-icon',
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
      <path d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
    </svg>
  `,
})
export class TicketIconComponent {
  readonly fill = input<string>('none');
  readonly iconClass = input<string>('');
}