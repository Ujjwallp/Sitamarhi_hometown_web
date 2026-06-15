import { Suspense, lazy } from 'react';
import Navbar from '@/components/layout/navbar';
import Hero from '@/pages/home/sections/hero';
import QuickAccess from '@/pages/home/sections/quick-access';
import DistrictOverview from '@/pages/home/sections/district-overview';
import Footer from '@/components/layout/footer';

// Lazy loaded below-the-fold components
const TopPlaces = lazy(() => import('@/pages/home/sections/top-places'));
const WhyVisit = lazy(() => import('@/pages/home/sections/why-visit'));
const Culture = lazy(() => import('@/pages/home/sections/culture'));
const History = lazy(() => import('@/pages/home/sections/history'));
const MapSection = lazy(() => import('@/pages/home/sections/map-section'));
const Blocks = lazy(() => import('@/pages/home/sections/blocks'));
const Administration = lazy(() => import('@/pages/home/sections/administration'));
const DistrictDirectory = lazy(() => import('@/pages/home/sections/district-directory'));
const Emergency = lazy(() => import('@/pages/home/sections/emergency'));

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        <DistrictOverview />
        
        <Suspense fallback={<div className="h-40 flex items-center justify-center text-devotional-maroon">Loading...</div>}>
          <TopPlaces />
          <WhyVisit />
          <Culture />
          <History />
          <MapSection />
          <Blocks />
          <Administration />
          <DistrictDirectory />
          <Emergency />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
