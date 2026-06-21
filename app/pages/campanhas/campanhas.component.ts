import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-campanhas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './campanhas.component.html',
  styleUrl: './campanhas.component.scss'
})
export class CampanhasComponent implements OnInit {
  campaigns: any[] = [];

  constructor(
    private authService: AuthService,
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCampaigns();
  }

  loadCampaigns(): void {
    // Implementar carregamento de campanhas do banco de dados
    this.campaignService.getCampaigns().subscribe({
      next: (data) => {
        this.campaigns = data;
      },
      error: (error) => {
        console.error('Erro ao carregar campanhas:', error);
      }
    });
  }

  viewCampaign(id: string): void {
    this.router.navigate(['/campanhas', id]);
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro ao deslogar:', error);
      }
    });
  }
}
