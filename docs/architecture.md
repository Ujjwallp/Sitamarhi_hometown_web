# Architecture Overview

This document outlines the high-level architecture and component structure of the Sitamarhi Hometown web application.

## 1. Application Structure

The application is built using React 18, utilizing functional components and React Hooks for state management. It is designed as a Single Page Application (SPA), although it currently renders sections linearly on a single scrolling page.

### 1.1 Directory Breakdown

- **`src/assets/`**: Contains all static media files (images, icons, and logos) used across the application. Grouped logically by domain (e.g., `administration/`, `places/`).
- **`src/components/`**: The core UI building blocks.
  - **`cards/`**: Reusable, atomic components representing single entities like an officer (`OfficerCard.jsx`), a tourist location (`PlaceCard.jsx`), or a cultural highlight (`CultureCard.jsx`).
  - **`layout/`**: Global components that wrap the application, primarily `Navbar.jsx` and `Footer.jsx`.
  - **`map/`**: Components responsible for rendering the interactive Leaflet map (`MapSection.jsx`).
  - **`sections/`**: Macro-components that compose multiple smaller components and cards to form complete visual sections of the page (e.g., `Administration.jsx`, `Culture.jsx`, `History.jsx`).
- **`src/data/`**: Static data definitions separated from the UI logic. These files export arrays or objects (e.g., `places.js`, `administration.js`) that are imported and mapped over by the components.
- **`src/App.jsx`**: The root component that orchestrates the layout and sequential rendering of all sections.

## 2. Component Hierarchy

A simplified view of the component tree:

```text
<App>
  ├── <Navbar>
  ├── <Hero>
  ├── <DistrictOverview>
  ├── <TopPlaces>
  │    └── <PlaceCard> (multiple)
  ├── <History>
  ├── <Culture>
  │    └── <CultureCard> (multiple)
  ├── <Administration>
  │    └── <OfficerCard> (multiple)
  ├── <DistrictDirectory>
  ├── <Emergency>
  ├── <MapSection>
  └── <Footer>
</App>
```

## 3. Data Flow

Data flows strictly top-down. Static arrays are imported directly into the `sections` components (e.g., `TopPlaces.jsx` imports data from `src/data/places.js`). The section components map over this data and pass it as props down to the atomic `cards` components.

There is minimal global state needed. Scroll position and active navigation highlighting are handled via `react-intersection-observer` directly inside the `Navbar` and respective sections.

## 4. Styling Strategy

Styling is handled exclusively via Tailwind CSS. 
- Utility classes are applied inline on React elements.
- Custom configurations, theme extensions, and color palettes are defined in `tailwind.config.js`.
- Base styles and Tailwind directives are imported in `src/index.css`.

## 5. Animations

Framer Motion is used for scroll-triggered reveal animations. Sections utilize `useInView` to detect when elements enter the viewport and trigger variants defining opacity and Y-axis translations.
