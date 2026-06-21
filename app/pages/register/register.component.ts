import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  registerError: string | null = null;
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
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  passwordsMatch(): boolean {
    const password = this.registerForm.get('password')?.value;
    const confirmPassword = this.registerForm.get('confirmPassword')?.value;
    return password && confirmPassword && password === confirmPassword;
  }

  onRegister(): void {
    if (this.registerForm.invalid || !this.passwordsMatch()) {
      this.registerError = 'Por favor, preencha todos os campos corretamente';
      return;
    }

    this.loading = true;
    this.registerError = null;

    const { email, password, name } = this.registerForm.value;

    this.authService.register(email, password).subscribe({
      next: (response) => {
        this.loading = false;
        console.log('Cadastro bem-sucedido', response);
        // Aqui você pode salvar dados adicionais do usuário se necessário
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        console.error('Erro no cadastro:', error);

        // Mensagens de erro personalizadas
        if (error.code === 'auth/email-already-in-use') {
          this.registerError = 'Este email já está registrado';
        } else if (error.code === 'auth/weak-password') {
          this.registerError = 'Senha muito fraca. Use uma senha mais forte';
        } else if (error.code === 'auth/invalid-email') {
          this.registerError = 'Email inválido';
        } else {
          this.registerError = 'Erro ao criar conta. Tente novamente.';
        }
      }
    });
  }
}
