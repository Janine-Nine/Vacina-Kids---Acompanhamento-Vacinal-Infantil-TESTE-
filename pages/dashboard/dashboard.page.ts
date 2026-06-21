import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonicModule
} from '@ionic/angular';

import { ChildService } from '../../services/child.service';
import { CampaignService } from '../../services/campaign.service';

import { Child } from '../../models/child.model';
import { Campaign } from '../../models/campaign.model';

import { ChildCardComponent } from '../../shared/components/child-card/child-card.component';
import { CampaignCardComponent } from '../../shared/components/campaign-card/campaign-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ChildCardComponent,
    CampaignCardComponent
  ],
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  private childService = inject(ChildService);

  private campaignService =
    inject(CampaignService);

  children: Child[] = [];

  campaigns: Campaign[] = [];

  totalChildren = 0;

  totalVaccinesApplied = 15;

  totalPendingVaccines = 4;

  totalLateVaccines = 2;

  vaccinationProgress = 75;

  ngOnInit(): void {

    this.loadChildren();

    this.loadCampaigns();

  }

  loadChildren() {

    this.childService
      .getChildren()
      .subscribe(data => {

        this.children = data;

        this.totalChildren =
          data.length;

      });

  }

  loadCampaigns() {

    this.campaignService
      .getActiveCampaigns()
      .subscribe(data => {

        this.campaigns = data;

      });

  }

}
