# Portfolio

A personal portfolio website built with React, Vite, Three.js, and Tailwind CSS. Features 3D animations, smooth scroll effects, and a modern responsive design.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Three.js** - 3D graphics (via @react-three/fiber and @react-three/drei)
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## Prerequisites

- Node.js v25 or higher (required for Vite 7)
- npm

> **Note:** This project includes an `.nvmrc` file. If you use nvm, run `nvm use` to switch to the correct Node version.

## Setup

1. Clone the repository:

```bash
git clone https://github.com/pi-etro/pi-etro.github.io.git
cd pi-etro.github.io
```

2. Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Deployment

This project is configured to deploy automatically to GitHub Pages using GitHub Actions. When you push to the `main` branch, the workflow will:

1. Checkout the code
2. Setup Node.js
3. Install dependencies
4. Build the project
5. Deploy to GitHub Pages

The deployment workflow is defined in `.github/workflows/deploy.yml`.

### Manual Deployment

If you need to deploy manually, you can build the project and upload the `dist` folder to your hosting provider.

## Project Structure

```
├── src/
│   ├── assets/          # Images and static assets
│   ├── components/      # React components
│   │   ├── canvas/      # Three.js/WebGL components
│   │   └── ...
│   ├── constants/       # App constants and data
│   ├── hoc/             # Higher-order components
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   ├── index.css        # Global styles
│   ├── main.jsx         # Entry point
│   └── styles.js        # Tailwind style presets
├── public/              # Static public assets
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── tailwind.config.cjs  # Tailwind CSS configuration
├── postcss.config.cjs   # PostCSS configuration
└── eslint.config.js     # ESLint configuration
```

## Customization

To personalize this portfolio:

1. Edit `src/constants/index.js` to update:
   - Navigation sections
   - Technologies
   - Work experience
   - Projects
   - Personal info (name, email, social links)

2. Replace images in `src/assets/` with your own

3. Modify component styles in `tailwind.config.cjs` to match your color scheme

## License

This project is open source and available under the [MIT License](LICENSE).
