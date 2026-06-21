import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  IonBadge,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { VacinaService } from '../services/vacina.service';
import { Vacina } from '../models/vacina';
import { Crianca } from '../models/crianca';

@Component({
  selector: 'app-detalhes-crianca',
  templateUrl: './detalhes-crianca.page.html',
  styleUrls: ['./detalhes-crianca.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBadge,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonItem,
    IonLabel,
    IonList,
    IonTitle,
    IonToolbar
  ]
})
export class DetalhesCriancaPage implements OnInit {

  crianca: Crianca | null = null;
  vacinas: Vacina[] = [];

  constructor(
    private router: Router,
    private vacinaService: VacinaService
  ) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.crianca = navigation.extras.state['crianca'] as Crianca;
      
      if (this.crianca?.id) {
        this.vacinaService.listar().subscribe(data => {
          this.vacinas = data.filter(v => v.criancaId === this.crianca?.id);
        });
      }
    }
  }

  getStatusColor(status: string): string {
    switch(status) {
      case 'APLICADA': return 'success';
      case 'PENDENTE': return 'warning';
      case 'ATRASADA': return 'tertiary';
      default: return 'medium';
    }
  }

}
