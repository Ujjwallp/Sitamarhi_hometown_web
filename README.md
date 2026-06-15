# Sitamarhi Hometown

A modern, responsive web application showcasing the heritage, culture, and administration of Sitamarhi district. Built with React and Vite, featuring interactive maps and dynamic UI components.

## 🚀 Features

- **Interactive Maps**: Integrated with Leaflet for visualizing key locations across Sitamarhi.
- **Dynamic User Interface**: Smooth animations powered by Framer Motion.
- **Modern Design**: Styled cleanly with Tailwind CSS for a fully responsive experience across all devices.
- **Comprehensive Sections**: Covers history, culture, administration, and emergency contacts.

## 🛠 Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Routing/State**: React Hooks
- **Maps**: [React Leaflet](https://react-leaflet.js.org/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Project Structure

```text
Sitamarhi_hometown_web/
├── src/
│   ├── assets/       # Static assets (images, icons, logos)
│   ├── components/   # React components
│   │   ├── cards/    # Reusable card components
│   │   ├── layout/   # Global layout components (Navbar, Footer)
│   │   ├── map/      # Map-specific components
│   │   └── sections/ # Page sections
│   ├── data/         # Static data files (JSON/JS objects)
│   ├── App.jsx       # Root component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles & Tailwind directives
├── docs/             # Technical documentation
├── public/           # Public assets
├── .env.example      # Environment variables template
└── vite.config.js    # Vite configuration
```

## 💻 Installation & Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Sitamarhi_hometown_web.git
   cd Sitamarhi_hometown_web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Copy the example environment file and fill in your values.
   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

## 🏗 Build & Deployment

To build the project for production:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized production build. You can preview the build locally using:

```bash
npm run preview
```

The output in the `dist` directory can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 🔮 Future Improvements

- Add robust global state management (e.g., Redux or Zustand) if the application scales.
- Implement server-side rendering (SSR) for better SEO capabilities using Next.js.
- Add internationalization (i18n) support for Hindi and English.
- Enhance accessibility (a11y) to comply with WCAG standards.

## 📄 License

This project is licensed under the MIT License.
