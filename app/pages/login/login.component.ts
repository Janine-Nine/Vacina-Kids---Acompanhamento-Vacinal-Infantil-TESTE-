import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  loginError: string | null = null;
  showPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginError = 'Por favor, preencha todos os campos corretamente';
      return;
    }

    this.loading = true;
    this.loginError = null;

    const { email, password } = this.loginForm.value;

    this.authService.login(email, password).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('Login bem-sucedido', response);
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        console.error('Erro no login:', error);

        // Mensagens de erro personalizadas
        if (error.code === 'auth/user-not-found') {
          this.loginError = 'Email não encontrado';
        } else if (error.code === 'auth/wrong-password') {
          this.loginError = 'Senha incorreta';
        } else if (error.code === 'auth/invalid-email') {
          this.loginError = 'Email inválido';
        } else if (error.code === 'auth/user-disabled') {
          this.loginError = 'Usuário desativado';
        } else {
          this.loginError = 'Erro ao fazer login. Tente novamente.';
        }
      }
    });
  }
}
