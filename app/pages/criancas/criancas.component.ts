import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-criancas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './criancas.component.html',
  styleUrl: './criancas.component.scss'
})
export class CriancasComponent implements OnInit {
  children: any[] = [];

  constructor(
    private authService: AuthService,
    private childService: ChildService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadChildren();
  }

  loadChildren(): void {
    // Implementar carregamento de crianças do banco de dados
    this.childService.getChildren().subscribe({
      next: (data) => {
        this.children = data;
      },
      error: (error) => {
        console.error('Erro ao carregar crianças:', error);
      }
    });
  }

  addChild(): void {
    this.router.navigate(['/criancas/add']);
  }

  viewChild(id: string): void {
    this.router.navigate(['/criancas', id]);
  }

  editChild(id: string): void {
    this.router.navigate(['/criancas', id, 'edit']);
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
