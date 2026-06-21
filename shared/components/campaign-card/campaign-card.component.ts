import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Campaign } from '../../../models/campaign.model';

@Component({
  selector: 'app-campaign-card',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ],
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent {

  @Input() campaign!: Campaign;

}
