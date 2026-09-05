# Muhammad Afifudin Portfolio Website

A modern, minimal, responsive, and high-performance developer portfolio built using **React.js + Vite + Tailwind CSS v4.0** with **TypeScript** and **Framer Motion**.

## 🚀 Live Demo & Build

This portfolio is structured to be deployed easily onto GitHub Pages. It leverages **HashRouter** to prevent 404 page-refresh issues common in static hosts.

## 🛠️ Tech Stack & Features

- **Core Framework**: React 18 (TypeScript)
- **Bundler & Tooling**: Vite 5
- **Styling**: Tailwind CSS v4.0 (using faster native `@tailwindcss/vite` plugin imports)
- **Icons**: Lucide React
- **Animations**: Framer Motion (page transitions and interactive card hover dynamics)
- **Contact Form**: EmailJS integrated with controlled forms and a graceful `mailto` fallback
- **Data-Driven**: All bio details, skills list, timeline events, and projects are managed within a single JSON file for easy future updates.
- **Theme**: Premium responsive Dark / Light mode toggling with persistence.

---

## 📁 Scalable Project Directory Structure

```text
muhammad-afifudin.github.io/
├── public/                     # Static files (copied directly to build output)
│   └── assets/
│       └── img/                # Profile image, project screenshots, and skill logos
├── src/
│   ├── assets/                 # Local styling assets if needed
│   ├── components/             # Reusable UI Components
│   │   ├── Footer.tsx          # Copyright signature and Scroll-To-Top button
│   │   ├── Layout.tsx          # Theme state coordinator and styling container
│   │   └── Navbar.tsx          # Sticky glassmorphism header & mobile navigation drawer
│   ├── data/
│   │   └── portfolioData.json  # Central JSON database for profile modifications
│   ├── pages/                  # Routed pages with Framer Motion entry effects
│   │   ├── About.tsx           # Biography and education details
│   │   ├── Certificates.tsx    # Awards and course certificates grid
│   │   ├── Contact.tsx         # Controlled form with EmailJS and mailto fallback
│   │   ├── Experience.tsx      # Interactive career milestone timeline
│   │   ├── Home.tsx            # Hero landing section and Call-To-Action buttons
│   │   ├── Projects.tsx        # Searchable and categorizable projects portfolio
│   │   └── Skills.tsx          # Technical skills dashboard divided by area
│   ├── App.tsx                 # Routing manager & animation switcher
│   ├── index.css               # Tailwind imports, custom font families & animations
│   └── main.tsx                # React DOM entry point
├── .prettierrc                 # Code style formatter settings
├── eslint.config.js            # Linter rules
├── index.html                  # Main SPA template file
├── package.json                # Project script commands and package versions
├── tsconfig.json               # TypeScript compilation guidelines
└── vite.config.ts              # Vite bundling plugin orchestrations
```

---

## ⚙️ Development Instructions

Follow these commands to install dependencies, run the server, and compile build output:

### 1. Install Project Dependencies
Run this in the terminal:
```bash
npm install
```

### 2. Start Local Development Server
Launch the Vite hot-reloading dev server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your web browser.

### 3. Setup Contact Form (EmailJS)
To enable the contact form via EmailJS, copy or create an `.env` file in the root directory and specify your personal keys:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```
*Note: If these environment variables are absent, the form will automatically fall back to opening the client's mail application (mailto link), ensuring it is functional immediately.*

### 4. Create Production Build
Generate an optimized production-ready bundle inside the `dist` folder:
```bash
npm run build
```

### 5. Format & Lint
Check and format files to maintain code quality:
```bash
# Format code styles with Prettier
npm run format

# Run ESLint validation
npm run lint
```
