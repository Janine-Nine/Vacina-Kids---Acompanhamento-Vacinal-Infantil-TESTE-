import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Vaccine } from '../../../models/vaccine.model';

@Component({
  selector: 'app-vaccine-card',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './vaccine-card.component.html',
  styleUrls: ['./vaccine-card.component.scss']
})
export class VaccineCardComponent {

  @Input() vaccine!: Vaccine;

  @Input() status!: string;

}
