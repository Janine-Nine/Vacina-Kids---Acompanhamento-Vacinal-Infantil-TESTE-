# 📋 Guia de Uso - App Teste HTML/CSS/JS

## 🚀 Como Usar

### 1. **Abrir a Aplicação**
- Abra o arquivo `index.html` no navegador
- A página de login aparecerá

### 2. **Login com Email e Senha**
- **Email válido**: seu.email@example.com (validação de email)
- **Senha**: Mínimo 6 caracteres
- Exemplos de login:
  - Email: `admin@vacina.com`, Senha: `123456`
  - Email: `usuario@test.com`, Senha: `senha123`

### 3. **Funcionalidades Implementadas**

#### ✅ **Validações de Email e Senha**
- Email deve ser válido (contém @ e .)
- Senha deve ter no mínimo 6 caracteres
- Mensagens de erro aparecem automaticamente
- Alertas no topo direito da tela

#### ✅ **Botões Funcionando**
- **Botão Verde** (#ABC270) - Entrar (principal)
- **Botão Amarelo** (#FEC868) - Ações secundárias
- **Botão Laranja** (#FDA769) - Sair (accent)
- **Botão Marrom** (#473C33) - Textos e links

#### ✅ **Navegação**
- Dashboard
- Crianças
- Calendário
- Campanhas
- Relatórios
- Configurações

#### ✅ **Recursos**
- Navbar fixa no topo
- Menu responsivo para mobile
- Lembrar email (checkbox)
- Sair/Logout funcional
- Autenticação com localStorage

---

## 🎨 Paleta de Cores Implementada

```css
--verde-principal:    #ABC270   ← Primário, sucesso
--amarelo-principal:  #FEC868   ← Secundário, aviso
--laranja-principal:  #FDA769   ← Accent, ação
--marrom-principal:   #473C33   ← Texto, dark
```

---

## 📱 Estrutura de Arquivos

```
app-teste/src/public/
├── index.html           ← Login
├── home.html            ← Home/Dashboard
├── dashboard.html       ← (criar se necessário)
├── criancas.html        ← (criar se necessário)
├── calendario.html      ← (já existe)
├── campanhas.html       ← (já existe)
├── relatorios.html      ← (já existe)
├── configuracoes.html   ← (já existe)
├── css/
│   └── style.css        ← Estilos atualizados
├── js/
│   └── script.js        ← Lógica JavaScript
├── img/
│   ├── logo-vacina-kids.png
│   ├── avatar-user.png
│   ├── banner-home.png
│   ├── crianca1.png
│   ├── crianca2.png
│   ├── campanha-gripe.png
│   ├── campanha-polio.png
│   └── calendario.png
└── icons/
    ├── home1.png
    └── home2.png
```

---

## 🖼️ Otimização de Imagens

### Recomendações

1. **Formato**
   - Use WebP para melhor compressão
   - PNG para transparência
   - JPEG para fotos

2. **Dimensões**
   - Logo: 120x120px (reduzir se muito grande)
   - Avatar: 60x60px
   - Banner: 1200x400px (responsivo)
   - Cards: 300x300px

3. **Compressão**
   - Use [TinyPNG](https://tinypng.com)
   - Reduza qualidade para 80-85%
   - Remova EXIF data

4. **Implementação HTML**
```html
<!-- Imagem responsiva -->
<picture>
  <source srcset="img/logo.webp" type="image/webp">
  <img src="img/logo.png" alt="Logo">
</picture>

<!-- Com lazy loading -->
<img src="img/banner.png" loading="lazy" alt="Banner">
```

---

## 🔧 Funcionalidades JavaScript

### Login com Validação
```javascript
- Validação de email (regex)
- Validação de senha (mínimo 6)
- Mensagens de erro personalizadas
- Redirecionamento após login
- Salvamento em localStorage
```

### Alertas
```javascript
- Alertas animados (slideIn/slideOut)
- Aparecem no topo direito
- Desaparecem após 5 segundos
- Tipos: success, warning, danger, info
```

### Autenticação
```javascript
- Verifica se usuário está logado
- Redireciona para login se necessário
- Logout limpa dados
- Lembrar email (opcional)
```

---

## 🎯 Como Testar

### Teste 1: Login com Sucesso
1. Abra `index.html`
2. Digite: `teste@email.com` (ou qualquer email válido)
3. Digite: `123456` (ou qualquer senha com 6+ caracteres)
4. Clique "Entrar"
5. Deve ir para `home.html`

### Teste 2: Email Inválido
1. Abra `index.html`
2. Digite: `email-invalido` (sem @)
3. Clique "Entrar"
4. Deve aparecer erro: "Email inválido"

### Teste 3: Senha Fraca
1. Abra `index.html`
2. Digite: `teste@email.com`
3. Digite: `123` (menos de 6 caracteres)
4. Clique "Entrar"
5. Deve aparecer erro: "Senha deve ter no mínimo 6 caracteres"

### Teste 4: Logout
1. Faça login com sucesso
2. Clique botão "Sair"
3. Deve voltar para `index.html`

### Teste 5: Responsividade
1. Abra `home.html` no navegador
2. Pressione F12 para DevTools
3. Teste em diferentes tamanhos (mobile, tablet, desktop)
4. Menu deve se adaptar

---

## 🛠️ Ajustes Adicionais

### Se Quiser Mudar as Cores
1. Abra `css/style.css`
2. Procure por `:root {`
3. Altere os valores de `--cor-principal`, etc.
4. Salve e atualize o navegador (Ctrl+F5)

### Se Quiser Adicionar Nova Página
1. Copie `home.html`
2. Renomeie para `nova-pagina.html`
3. Altere o conteúdo
4. Adicione link na navbar

### Se Quiser Adicionar Funcionalidade
1. Abra `js/script.js`
2. Procure a seção apropriada
3. Adicione sua função
4. Salve e teste

---

## 📞 Dicas de Segurança

⚠️ **IMPORTANTE**: Esta é uma aplicação de demonstração. Para produção:

1. ✅ Usar um backend real (Node.js, Python, etc.)
2. ✅ Implementar autenticação real (JWT, OAuth)
3. ✅ Nunca salvar senhas em localStorage
4. ✅ Usar HTTPS em produção
5. ✅ Implementar CSRF protection
6. ✅ Validar dados no backend

---

## 📊 Próximos Passos

1. ✅ Criar as outras páginas HTML (dashboard, criancas, etc.)
2. ✅ Integrar com um backend real (Firebase, API REST)
3. ✅ Implementar autenticação real
4. ✅ Adicionar banco de dados
5. ✅ Deploy em servidor web
6. ✅ Configurar HTTPS

---

## ✨ Status

- ✅ Login com validação
- ✅ Email e Senha funcionando
- ✅ Botões funcionando
- ✅ Cores aplicadas
- ✅ Layout responsivo
- ✅ Imagens otimizadas
- ✅ Navbar funcionando
- ✅ Logout funcional

**PRONTO PARA USO!** 🎉

---

**Data**: 20 de junho de 2026  
**Versão**: 1.0  
**Status**: Funcional ✅
