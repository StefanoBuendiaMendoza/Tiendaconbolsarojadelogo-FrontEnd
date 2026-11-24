import { Component, input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
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
      <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
      <path d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  `,
})
export class UserIconComponent {
  readonly fill = input<string>('none');
  readonly iconClass = input<string>('');
}

