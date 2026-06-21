# Guia de Otimização de Imagens - VacinaKids

## 📸 Otimização de Imagens para Web

Para melhor performance e responsividade, siga estas recomendações:

## 🎯 Dimensões Recomendadas

### Para Different Screen Sizes

```
Mobile (320px - 480px):
- Largura máxima: 320px
- Altura: Proporcional (aspect-ratio: 16/9 ou similar)

Tablet (481px - 768px):
- Largura máxima: 400px
- Altura: Proporcional

Desktop (769px+):
- Largura máxima: 600px - 800px
- Altura: Proporcional
```

## 📦 Formatos Recomendados

### 1. **WebP** (Melhor compressão)
```bash
# Converter PNG para WebP
cwebp input.png -o output.webp -q 80

# Converter JPG para WebP
cwebp input.jpg -o output.webp -q 85
```

### 2. **AVIF** (Mais moderno, melhor compressão)
```bash
# Converter para AVIF usando ffmpeg
ffmpeg -i input.jpg -c:v libaom-av1 -crf 30 output.avif
```

### 3. **JPEG/PNG** (Fallback)
- JPEG para fotos e imagens complexas
- PNG para ícones e imagens com transparência

## 🔧 Tamanho de Arquivo Recomendado

- **Ícones**: < 10 KB
- **Thumbnails**: < 30 KB
- **Imagens pequenas**: < 50 KB
- **Imagens médias**: < 100 KB
- **Imagens grandes**: < 200 KB

## 📝 Implementação em HTML

### Usando picture para responsividade

```html
<picture>
  <!-- Desktop -->
  <source media="(min-width: 1024px)" srcset="image-lg.webp" type="image/webp">
  <source media="(min-width: 1024px)" srcset="image-lg.jpg" type="image/jpeg">
  
  <!-- Tablet -->
  <source media="(min-width: 481px)" srcset="image-md.webp" type="image/webp">
  <source media="(min-width: 481px)" srcset="image-md.jpg" type="image/jpeg">
  
  <!-- Mobile -->
  <source srcset="image-sm.webp" type="image/webp">
  <img src="image-sm.jpg" alt="Descrição da imagem" loading="lazy" class="responsive-image">
</picture>
```

### CSS para Imagens Responsivas

```scss
.responsive-image {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  
  // Para manter aspect ratio
  @media (min-width: 769px) {
    max-width: 100%;
  }
  
  @media (max-width: 768px) {
    max-width: 100%;
  }
}

// Para imagens de fundo
.image-cover {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

// Para imagens com aspecto fixo
.image-16-9 {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; // 16:9
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
```

## 🚀 Lazy Loading

### Para imagens abaixo da dobra

```html
<!-- Nativa (Recomendado) -->
<img src="image.jpg" alt="Descrição" loading="lazy">

<!-- Com intersection observer para mais controle -->
<img src="placeholder.jpg" data-src="image.jpg" alt="Descrição" class="lazy-load">
```

### JavaScript para Lazy Loading

```typescript
// Implementar em um service Angular
export class ImageLazyLoadService {
  constructor() {
    this.initLazyLoading();
  }

  private initLazyLoading(): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.getAttribute('data-src') || '';
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      document.querySelectorAll('img.lazy-load').forEach(img => {
        observer.observe(img);
      });
    }
  }
}
```

## 🛠️ Ferramentas Recomendadas

### Otimização Offline
- **ImageOptim** (Mac)
- **FileOptimizer** (Windows)
- **Trimage** (Linux)

### Conversão de Formatos
- **XnConvert** - Conversão em lote
- **ImageMagick** - Linha de comando
- **FFmpeg** - Para vídeos e imagens

### Análise de Performance
- **Google PageSpeed Insights**
- **WebPageTest**
- **GTmetrix**

## 📋 Checklist de Otimização

- [ ] Todas as imagens estão em WebP ou AVIF
- [ ] Imagens têm fallback em JPEG/PNG
- [ ] Imagens responsivas usando `picture` tag
- [ ] Lazy loading implementado
- [ ] Alt text descritivo em todas as imagens
- [ ] Ícones otimizados e em SVG quando possível
- [ ] Compressão de imagem aplicada
- [ ] Tamanho total de imagens < limite de orçamento
- [ ] Tests de responsividade em múltiplos dispositivos

## 📸 Estrutura de Pastas para Imagens

```
src/
├── assets/
│   ├── images/
│   │   ├── logos/
│   │   │   ├── logo.svg
│   │   │   ├── logo-dark.svg
│   │   │   └── favicon.ico
│   │   ├── icons/
│   │   │   ├── home.svg
│   │   │   ├── criancas.svg
│   │   │   └── campanhas.svg
│   │   ├── illustrations/
│   │   │   ├── welcome.svg
│   │   │   └── empty-state.svg
│   │   └── backgrounds/
│   │       ├── gradient-sm.jpg
│   │       └── gradient-lg.jpg
│   └── screenshots/
│       └── (screenshots para documentação)
```

## 💡 Dicas de Performance

1. **Use SVG para ícones** - Escalável e leve
2. **Comprima agressivamente** - Qualidade vs. tamanho
3. **Use CDN** - Para servir imagens globalmente
4. **Cache de navegador** - Configure headers de cache
5. **Next-Gen Formats** - Sempre use WebP/AVIF com fallback

---

**Última atualização**: 2026-06-20
