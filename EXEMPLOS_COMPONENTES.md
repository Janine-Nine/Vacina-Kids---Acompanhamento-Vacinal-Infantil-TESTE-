# 🎨 Exemplos de Componentes - VacinaKids

## 📋 Componentes e Padrões de Uso

### 1. Botões

#### Botão Verde (Primário)
```html
<button class="btn btn-primary">Botão Verde</button>
<button class="btn btn-primary btn-sm">Pequeno</button>
<button class="btn btn-primary btn-lg">Grande</button>
<button class="btn btn-primary btn-block">Largura Total</button>
```

#### Botão Amarelo (Secundário)
```html
<button class="btn btn-secondary">Botão Amarelo</button>
<button class="btn btn-secondary btn-lg">Ação Secundária</button>
```

#### Botão Laranja (Accent/Action)
```html
<button class="btn btn-accent">Botão Laranja</button>
<button class="btn btn-accent btn-sm">Deletar</button>
```

#### Botão Marrom (Dark)
```html
<button class="btn btn-dark">Botão Marrom</button>
```

#### Botão Outlined
```html
<button class="btn btn-outlined">Botão com Borda</button>
```

---

### 2. Cards

#### Card Simples
```html
<div class="card">
  <h3>Título do Card</h3>
  <p>Descrição do card com informações.</p>
  <button class="btn btn-primary btn-sm">Ação</button>
</div>
```

#### Card com Header e Footer
```html
<div class="card">
  <div class="card-header">
    <h3>Criança</h3>
  </div>
  <p>João Silva</p>
  <p>Idade: 5 anos</p>
  <div class="card-footer">
    <button class="btn btn-primary btn-sm">Ver Detalhes</button>
  </div>
</div>
```

---

### 3. Badges / Status

#### Status Vacinal
```html
<!-- Em Dia -->
<span class="badge badge-success">✓ Em Dia</span>

<!-- Pendente -->
<span class="badge badge-warning">! Pendente</span>

<!-- Atrasado -->
<span class="badge badge-danger">⚠ Atrasado</span>

<!-- Info -->
<span class="badge badge-info">ℹ Informação</span>
```

---

### 4. Formulários

#### Campo de Entrada
```html
<div class="form-group">
  <label class="label-required">Email</label>
  <input type="email" class="input-field" placeholder="seu.email@example.com">
  <div class="form-error">Email inválido</div>
  <div class="form-help">Usaremos isso para entrar em contato</div>
</div>
```

#### Campo de Senha
```html
<div class="form-group">
  <label class="label-required">Senha</label>
  <input type="password" class="input-field" placeholder="Digite sua senha">
  <div class="form-error">Senha é obrigatória</div>
</div>
```

#### Textarea
```html
<div class="form-group">
  <label>Observações</label>
  <textarea class="input-field" placeholder="Adicione observações..."></textarea>
</div>
```

#### Select
```html
<div class="form-group">
  <label class="label-required">Vacina</label>
  <select class="input-field">
    <option>Selecione uma vacina</option>
    <option>Poliomielite</option>
    <option>Hepatite B</option>
    <option>BCG</option>
  </select>
</div>
```

---

### 5. Alerts

#### Sucesso
```html
<div class="alert alert-success">
  ✓ Operação realizada com sucesso!
</div>
```

#### Aviso
```html
<div class="alert alert-warning">
  ⚠ Atenção: Verifique os dados antes de enviar
</div>
```

#### Erro
```html
<div class="alert alert-danger">
  ✗ Erro ao processar a solicitação
</div>
```

#### Informação
```html
<div class="alert alert-info">
  ℹ Informação: Você será redirecionado em 5 segundos
</div>
```

---

### 6. Grid de Itens

#### Cards em Grid
```html
<div class="cards-grid">
  <div class="card">
    <h3>Criança 1</h3>
    <p>João Silva</p>
    <button class="btn btn-primary btn-sm btn-block">Ver</button>
  </div>
  
  <div class="card">
    <h3>Criança 2</h3>
    <p>Maria Silva</p>
    <button class="btn btn-primary btn-sm btn-block">Ver</button>
  </div>
  
  <div class="card">
    <h3>Criança 3</h3>
    <p>Pedro Silva</p>
    <button class="btn btn-primary btn-sm btn-block">Ver</button>
  </div>
</div>
```

---

### 7. Tabela

#### Tabela Responsiva
```html
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Criança</th>
        <th>Vacina</th>
        <th>Data</th>
        <th>Status</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>João Silva</td>
        <td>Poliomielite</td>
        <td>15/06/2026</td>
        <td><span class="badge badge-success">Aplicada</span></td>
        <td>
          <button class="btn btn-sm btn-primary">Ver</button>
          <button class="btn btn-sm btn-accent">Editar</button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

### 8. Componentes Ionic

#### Header com Toolbar
```html
<ion-header>
  <ion-toolbar color="primary">
    <ion-title>VacinaKids</ion-title>
    <ion-buttons slot="end">
      <button class="btn btn-secondary">Sair</button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

#### Buttons Ionic
```html
<ion-button color="primary" expand="block">
  <ion-icon slot="start" name="add"></ion-icon>
  Adicionar
</ion-button>

<ion-button color="secondary">
  <ion-icon slot="start" name="pencil"></ion-icon>
  Editar
</ion-button>

<ion-button color="warning">
  <ion-icon slot="start" name="trash"></ion-icon>
  Deletar
</ion-button>
```

---

### 9. Estrutura de Página

#### Layout Completo
```html
<div class="page-container">
  <!-- Header -->
  <ion-header>
    <ion-toolbar>
      <ion-title>Minha Página</ion-title>
    </ion-toolbar>
  </ion-header>

  <!-- Conteúdo -->
  <ion-content class="ion-padding">
    <!-- Título da Página -->
    <div class="page-header">
      <h1>Bem-vindo</h1>
      <button class="btn btn-primary">Ação</button>
    </div>

    <!-- Grid de Cards -->
    <div class="cards-grid">
      <div class="card">
        <!-- Conteúdo do card -->
      </div>
    </div>

    <!-- Estado Vazio -->
    <div class="empty-state" *ngIf="items.length === 0">
      <p>Nenhum item encontrado</p>
    </div>
  </ion-content>
</div>
```

---

### 10. Classes Utilitárias

#### Espaçamento
```html
<!-- Margin Top -->
<div class="mt-1">Margem pequena</div>
<div class="mt-2">Margem média</div>
<div class="mt-3">Margem grande</div>

<!-- Margin Bottom -->
<div class="mb-1">Margem inferior pequena</div>
<div class="mb-2">Margem inferior média</div>

<!-- Padding -->
<div class="p-1">Padding pequeno</div>
<div class="p-2">Padding médio</div>
<div class="p-3">Padding grande</div>
```

#### Texto
```html
<!-- Alinhamento -->
<div class="text-center">Texto centralizado</div>
<div class="text-left">Texto à esquerda</div>
<div class="text-right">Texto à direita</div>

<!-- Cores -->
<span class="text-primary">Texto verde</span>
<span class="text-secondary">Texto amarelo</span>
<span class="text-accent">Texto laranja</span>
<span class="text-danger">Texto vermelho</span>
<span class="text-muted">Texto cinza</span>
```

#### Display
```html
<div class="d-flex">Flex container</div>
<div class="d-none">Escondido</div>
<div class="d-block">Bloco</div>
<div class="d-grid">Grid</div>
```

#### Flexbox
```html
<div class="d-flex justify-center align-center gap-2">
  <button class="btn btn-primary">OK</button>
  <button class="btn btn-secondary">Cancelar</button>
</div>
```

#### Sombras e Efeitos
```html
<div class="shadow-sm">Sombra pequena</div>
<div class="shadow-md">Sombra média</div>
<div class="shadow-lg">Sombra grande</div>

<div class="rounded">Cantos arredondados</div>
<div class="rounded-full">Círculo</div>
```

---

## 🎯 Padrões de Cores

### Quando Usar Cada Cor

- **Verde (#ABC270)**: Ações primárias, sucesso, aprovação
- **Amarelo (#FEC868)**: Ações secundárias, alertas, avisos
- **Laranja (#FDA769)**: Ações críticas, atenção, deletar
- **Marrom (#473C33)**: Texto, backgrounds escuros, corpo

---

## 📱 Responsividade

### Mobile
```html
<div class="cards-grid">
  <!-- Automaticamente 1 coluna -->
</div>

<button class="btn btn-primary btn-block">
  <!-- Largura total em mobile -->
</button>
```

### Tablet
```html
<!-- Grid com 2 colunas -->
```

### Desktop
```html
<!-- Grid com 3+ colunas -->
```

---

## 🧪 Exemplo Completo

### Página de Crianças
```html
<div class="page-container">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Crianças</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content class="ion-padding">
    <div class="page-header">
      <h1>Minhas Crianças</h1>
      <button class="btn btn-primary">
        + Adicionar Criança
      </button>
    </div>

    <div class="cards-grid">
      <div class="card">
        <h3>João Silva</h3>
        <p><strong>Idade:</strong> 5 anos</p>
        <p><strong>Status:</strong> 
          <span class="badge badge-success">Em Dia</span>
        </p>
        <div class="card-actions">
          <button class="btn btn-primary btn-sm">Ver</button>
          <button class="btn btn-accent btn-sm">Editar</button>
        </div>
      </div>
    </div>

    <div class="empty-state">
      <p>Nenhuma criança cadastrada</p>
    </div>
  </ion-content>
</div>
```

---

## 💡 Dicas

1. Use `btn-block` em formulários para botões ocuparem toda largura
2. Use `card` para agrupar informações relacionadas
3. Use badges para indicar status rapidamente
4. Use alerts para comunicar feedback importante
5. Use grid layout para múltiplos itens
6. Use classes utilitárias para ajustes rápidos

---

**Última atualização**: 20 de junho de 2026
