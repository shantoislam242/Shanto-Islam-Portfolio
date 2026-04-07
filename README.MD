<div align="center">

# Shanto Islam — 3D Portfolio

<p align="center">
	<a href="https://github.com/shantoislam242/Shanto-Islam-Portfolio/stargazers"><img alt="Stars" src="https://img.shields.io/github/stars/shantoislam242/Shanto-Islam-Portfolio?style=social"></a>
	<a href="https://github.com/shantoislam242/Shanto-Islam-Portfolio/network/members"><img alt="Forks" src="https://img.shields.io/github/forks/shantoislam242/Shanto-Islam-Portfolio?style=social"></a>
	<a href="#tech-stack"><img alt="Built with" src="https://img.shields.io/badge/Built%20with-Vite%20·%20React%20·%20Three.js-915EFF"></a>
	<a href="LICENSE"><img alt="License" src="https://img.shields.io/badge/license-Custom-blue"></a>
</p>

<p align="center">
	<a href="https://github.com/shantoislam242/Shanto-Islam-Portfolio/issues"><img alt="Issues" src="https://img.shields.io/github/issues/shantoislam242/Shanto-Islam-Portfolio?color=%23915EFF"></a>
	<a href="https://github.com/shantoislam242/Shanto-Islam-Portfolio/pulls"><img alt="PRs" src="https://img.shields.io/github/issues-pr/shantoislam242/Shanto-Islam-Portfolio?color=%2300B8D9"></a>
	<img alt="Last commit" src="https://img.shields.io/github/last-commit/shantoislam242/Shanto-Islam-Portfolio?color=%23A3E635">
	<img alt="Top language" src="https://img.shields.io/github/languages/top/shantoislam242/Shanto-Islam-Portfolio?color=%23F59E0B">
	<img alt="Repo size" src="https://img.shields.io/github/repo-size/shantoislam242/Shanto-Islam-Portfolio?color=%239999FF">
	<a href="#contributing"><img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-ff69b4.svg"></a>
</p>

</div>

An immersive, performant portfolio powered by React, react-three-fiber (Three.js), and Tailwind CSS — featuring a 3D hero scene, animated skills grid, project gallery with tilt effects, and a production-ready Web3Forms contact form with a real-time Earth canvas backdrop.

<details>
	<summary><b>Table of Contents</b></summary>

- Overview
- Features
- Tech Stack
- Quick Start
- Environment Variables
- Project Structure
- Deployment
- Attributions
- Contributing
- Maintainer
- License
- Contact

</details>

## Overview

This project is a modern single-page application scaffolded with Vite and styled with Tailwind CSS, using react-three-fiber and drei to render high-fidelity 3D scenes. Animations are orchestrated with Framer Motion, and analytics are integrated via `@vercel/analytics`.

## Features

- **3D Hero**: Interactive desktop PC GLTF model with OrbitControls.
- **Starfield Background**: GPU-friendly particle starfield using `maath` and R3F points.
- **Projects Gallery**: Tilted project cards, tag chips, and quick links to live demos and source.
- **Contact Section**: Web3Forms-powered form with confetti success state and Earth GLTF canvas backdrop.
- **Smooth UX**: Framer Motion transitions, lazy loading via React.Suspense, and drei `Preload` for 3D assets.
- **Responsive & Accessible**: Tailwind JIT styling mindful of all device sizes.
- **Analytics & SEO**: Integrated `@vercel/analytics` and optimized metadata.

## Tech Stack

- **Runtime**: React 18, React Router 6
- **3D/Graphics**: `@react-three/fiber`, `@react-three/drei`, `three`, `maath`
- **Styling**: Tailwind CSS
- **Motion**: Framer Motion
- **Forms**: Web3Forms, `react-hot-toast`, `react-confetti`
- **Tooling**: Vite, ESLint
- **Analytics**: `@vercel/analytics`

## Quick Start

### Prerequisites
- Node.js 18+

### Install and run

```powershell
npm install
npm run dev
```

### Build and preview

```powershell
npm run build
npm run preview
```

## Environment Variables

The contact form requires the following environment variables. Create a `.env.local` or `.env` in the project root:

```dotenv
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

It gets used in `src/components/Contact.jsx` via `import.meta.env`.

## Project Structure

```
Shanto-Islam-Portfolio/
├─ index.html                   # Meta tags, root, Vite entry
├─ package.json                 # Scripts and dependencies
├─ public/                      # Static Assets and 3D Models
├─ src/
│  ├─ App.jsx                   # Route shell and section composition
│  ├─ components/               # UI sections and canvases
│  ├─ constants/                # Data for nav, projects, experiences
│  ├─ utils/                    # Framer Motion helpers and utilities
│  ├─ assets/                   # Images, logos, PDFs
│  ├─ styles.js                 # Shared Tailwind class tokens
│  └─ main.jsx                  # App bootstrap + analytics
└─ tailwind.config.js           # Theme, colors, hero bg configurations
```

## Deployment

**Vercel**
- Import repo in Vercel; framework: Vite.
- Build command: `npm run build`, output: `dist`.
- Add your Environment Variables before deploying.

**Any Static Host**
- Serve the `dist/` directory over any CDN or static hosting provider (e.g. GitHub Pages, Netlify).

## Attributions

3D Models (CC-BY-4.0)
- Gaming Desktop PC by Yolala1232 — https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66
- Stylized planet by cmzw — https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70

## Contributing

Contributions, issues and feature requests are welcome!

1. Fork the repo 
2. Create a feature branch 
3. Commit with clear messages 
4. Open a Pull Request

## Maintainer

<table>
	<tr>
		<td>
			<b>Shanto Islam</b><br/>
			<a href="https://github.com/shantoislam242">GitHub</a> • <a href="https://www.linkedin.com/in/shanto-web-dev/">LinkedIn</a>
		</td>
	</tr>
	<tr>
		<td>
			⭐ If you like this project, consider starring it to support ongoing work!
		</td>
	</tr>
</table>

## License

This project is open source. See the repository `LICENSE` for terms. Third-party 3D assets are licensed under CC-BY-4.0 as noted above.

## Contact

- **GitHub**: https://github.com/shantoislam242
- **LinkedIn**: https://www.linkedin.com/in/shanto-web-dev/
