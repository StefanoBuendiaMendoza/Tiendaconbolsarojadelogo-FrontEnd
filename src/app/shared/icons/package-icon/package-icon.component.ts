import { Component, input } from '@angular/core';

@Component({
  selector: 'app-package-icon',
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
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" />
      <path d="M3 7l9 5 9-5" />
      <path d="M12 12v10" />
    </svg>
  `,
})
export class PackageIconComponent {
  readonly fill = input<string>('none');
  readonly iconClass = input<string>('');
}

