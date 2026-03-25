# 🎨 Apresentação Pessoal - Portfolio Interativo

Um website de apresentação pessoal moderno e interativo construído com React, TypeScript, Tailwind CSS e Framer Motion.

## ✨ Características

- 🎭 **Design Moderno**: Interface escura elegante com animações suaves
- 🧭 **Navegação Lateral**: Sidebar interativa com indicadores de progresso
- 📱 **Responsivo**: Funciona perfeitamente em diferentes tamanhos de tela
- ⚡ **Performance**: Construído com Vite para desenvolvimento e builds rápidos
- 🎨 **Animações**: Transições suaves usando Framer Motion
- 🎯 **Type-Safe**: Desenvolvido com TypeScript

## 🚀 Seções

1. **Sobre** - Informações pessoais e skills
2. **História** - Timeline da jornada profissional
3. **Formação** - Educação e certificações
4. **Carreira** - Experiência profissional detalhada
5. **Curiosidades** - Fatos interessantes pessoais
6. **Sonhos** - Objetivos e aspirações
7. **Desafios** - Metas de desenvolvimento pessoal

## 🛠️ Tecnologias

- **React 18** - Biblioteca UI
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📦 Instalação

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🎯 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Preview da build de produção
- `npm run lint` - Executa o linter

## 🎨 Personalização

Para personalizar as cores e tema, edite o arquivo `src/index.css` onde estão definidas as variáveis CSS customizadas.

### Cores Principais

- **Primary**: Verde água (#4fd1c5) - Usado para destaques principais
- **Accent**: Roxo (#b794f4) - Usado para acentos
- **Highlight**: Amarelo (#ecc94b) - Usado para highlights especiais

## 📝 Estrutura de Pastas

```
src/
├── components/
│   ├── Sidebar.tsx
│   └── sections/
│       ├── SobreSection.tsx
│       ├── HistoriaSection.tsx
│       ├── FormacaoSection.tsx
│       ├── CarreiraSection.tsx
│       └── FunCardsSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
