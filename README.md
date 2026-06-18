# Sitamarhi Hometown

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer)](https://www.framer.com/motion/)
[![Leaflet](https://img.shields.io/badge/Leaflet-199900?style=flat-square&logo=leaflet)](https://leafletjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A premium, highly-responsive web application showcasing the rich spiritual heritage, cultural legacy, and administration of **Sitamarhi**, the sacred birthplace of Goddess Sita.

![Sitamarhi Web App Preview](docs/images/screenshot.png)

## 🌟 Key Features

- **Spiritual & Premium Aesthetic**: A clean design featuring modern typography, warm gradients, and an immersive Mithila-themed user interface.
- **Feature-Based Colocated Architecture**: Clean and modular folder organization where components, their exclusive data models, and specific media assets live together.
- **Interactive Maps**: Fully responsive Leaflet-powered maps highlighting key historical and spiritual attractions.
- **Smooth Animations**: Tailored micro-interactions and transitions using Framer Motion.
- **Responsive Layout**: Pixel-perfect layout across desktop, tablet, and mobile devices built using Tailwind CSS.

## 🛠 Tech Stack

- **Frontend**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Map Library**: [Leaflet](https://leafletjs.com/)

## 📁 Project Structure

The project follows a professional **Feature-Based Colocated Structure** where components are self-contained with their related assets and data:

```text
Sitamarhi_hometown_web/
├── docs/             # Technical documentation & assets
│   ├── images/
│   │   └── screenshot.png
│   └── Architecture.md
├── public/           # Static public assets (favicons, etc.)
├── src/
│   ├── assets/       # Global static assets
│   │   ├── images/   # Global background images
│   │   └── logos/    # Global logos (e.g., Sita temple logo)
│   ├── components/   # Global layout components
│   │   └── layout/   # Navbar & Footer layout elements
│   ├── pages/        # Application Pages
│   │   └── home/
│   │       ├── home.jsx  # Page assembly file
│   │       └── sections/ # Feature-based colocated sections
│   │           ├── hero/
│   │           │   ├── index.jsx  # Main component
│   │           │   └── images/    # Specific hero backgrounds
│   │           ├── top-places/
│   │           │   ├── index.jsx
│   │           │   ├── place-card.jsx  # Specific UI element
│   │           │   ├── placesData.js   # Exclusive data file
│   │           │   └── images/         # Place-specific images
│   │           ├── culture/
│   │           │   ├── index.jsx
│   │           │   ├── culture-card.jsx
│   │           │   ├── cultureData.js
│   │           │   └── images/
│   │           └── ... (administration, history, emergency sections, etc.)
│   ├── App.jsx       # Root component
│   ├── main.jsx      # App entry point
│   └── index.css     # Global styles & Tailwind configuration
├── tailwind.config.js
└── vite.config.js
```

## 💻 Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ujjwallp/Sitamarhi_hometown_web.git
   cd Sitamarhi_hometown_web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   ```
   The production-ready assets will be generated in the `dist` directory and can be deployed to Vercel, Netlify, or GitHub Pages.

## 📄 License

This project is licensed under the MIT License.
