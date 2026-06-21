import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss']
})
export class StatusBadgeComponent {

  @Input() status = '';

}
