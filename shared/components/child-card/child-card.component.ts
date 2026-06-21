import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { Child } from '../../../models/child.model';

@Component({
  selector: 'app-child-card',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './child-card.component.html',
  styleUrls: ['./child-card.component.scss']
})
export class ChildCardComponent {

  @Input() child!: Child;

  @Input() progress = 0;

}
