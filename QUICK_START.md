# VacinaKids - Quick Start Guide

## 🚀 Iniciando Rápido

### 1. Instalação

```bash
# Instalar dependências
npm install

# Se tiver problemas, limpe o cache
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### 2. Configurar Firebase

Edite `src/environments/environment.ts`:

```typescript
export const environment = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-app.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};
```

### 3. Iniciar Servidor de Desenvolvimento

```bash
ng serve
```

Acesse: `http://localhost:4200`

## 🎯 Fluxo de Uso

### Login
1. Acesse a página de login
2. Digite email e senha
3. Clique em "Entrar"
4. Será redirecionado para o dashboard

### Cadastro
1. Clique em "Registre-se aqui"
2. Preencha nome, email e senha
3. Confirme a senha
4. Clique em "Criar Conta"
5. Será redirecionado para o dashboard

### Navegação
- **Dashboard**: Visão geral da vacinação
- **Crianças**: Gerenciar crianças cadastradas
- **Campanhas**: Ver campanhas de vacinação ativas

## 📚 Estrutura de Pastas Principais

```
src/
├── app/
│   ├── pages/
│   │   ├── login/        → Página de login
│   │   ├── register/     → Página de registro
│   │   ├── dashboard/    → Painel principal
│   │   ├── criancas/     → Gerenciamento de crianças
│   │   └── campanhas/    → Campanhas de vacinação
│   ├── services/         → Serviços (Auth, Child, Campaign, etc)
│   ├── models/           → Modelos de dados
│   └── app.routes.ts     → Rotas da aplicação
├── styles.scss           → Estilos globais
├── theme/
│   └── variables.scss    → Tema Ionic
└── assets/
    └── images/           → Imagens da aplicação
```

## 🎨 Paleta de Cores Disponível

```css
Verde:    #ABC270  (Botões primários)
Amarelo:  #FEC868  (Botões secundários)
Laranja:  #FDA769  (Botões de ação)
Marrom:   #473C33  (Texto principal)
```

## 🔑 Comandos Úteis

### Desenvolvimento
```bash
# Iniciar servidor
ng serve

# Build para produção
ng build --configuration production

# Rodar testes
ng test

# Lint do código
ng lint

# Gerar um novo componente
ng generate component nome-componente

# Gerar um novo serviço
ng generate service nome-servico
```

### Firebase
```bash
# Fazer deploy para Firebase Hosting
firebase deploy

# Ver logs
firebase functions:log
```

## ⚡ Performance Tips

1. **Lazy loading**: As rotas usam lazy loading automaticamente
2. **Change detection**: OnPush strategy em componentes complexos
3. **Imagens**: Use picture tag com WebP + fallback
4. **Bundles**: Mantenha abaixo de 500KB

## 🐛 Troubleshooting

### Erro de autenticação
- Verifique as credenciais do Firebase
- Certifique-se de que a autenticação está habilitada no Firebase Console
- Limpe o cache do navegador

### Erro de CORS
- Configure CORS no seu backend/Firebase
- Use proxy.conf.json para desenvolvimento local

### Imagens não aparecem
- Verifique o caminho das imagens em `src/assets/images/`
- Use URLs absolutas começando com `/assets/`

### Estilos não aplicados
- Certifique-se de que `theme/variables.scss` está importado
- Limpe o cache do navegador
- Reinicie o servidor de desenvolvimento

## 📱 Testando Responsividade

### Chrome DevTools
1. Abra DevTools (F12)
2. Clique no ícone de dispositivo (Ctrl+Shift+M)
3. Selecione diferentes resoluções

### Dispositivos Teste
- iPhone SE (375x667)
- iPad (768x1024)
- Desktop (1920x1080)

## 🔐 Segurança

1. **Nunca** commit credenciais no git
2. Use variáveis de ambiente para credenciais sensíveis
3. Implemente AuthGuard para rotas protegidas
4. Configure regras de segurança no Firebase Firestore

## 📝 Logging

```typescript
// Para development
console.log('Mensagem de debug');

// Para production - considere usar Sentry ou similar
import * as Sentry from "@sentry/angular";
Sentry.captureException(error);
```

## 🎓 Recursos de Aprendizado

- [Angular Docs](https://angular.io/docs)
- [Ionic Docs](https://ionicframework.com/docs)
- [Firebase Docs](https://firebase.google.com/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

## 🆘 Precisa de Ajuda?

Consulte:
1. `GUIA_IMPLEMENTACAO.md` - Documentação completa
2. `OTIMIZACAO_IMAGENS.md` - Guia de imagens
3. Logs do console (F12 → Console)
4. Documentação oficial dos frameworks

---

**Dica**: Para melhor experiência, use VS Code com extensões:
- Angular Language Service
- Prettier
- ESLint
- Firebase Explorer

**Última atualização**: 2026-06-20
