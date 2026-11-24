import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MOCK_DEPARTMENTS } from '../../../../core/mocks/plaza-vea.mock';

@Component({
  selector: 'app-department-cards',
  imports: [CommonModule],
  templateUrl: './department-cards.component.html',
})
export class DepartmentCardsComponent {
  protected readonly departments = signal(MOCK_DEPARTMENTS);
}

