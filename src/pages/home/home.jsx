import { Suspense, lazy } from 'react';
import Navbar from '@/layouts/navbar';
import Hero from '@/pages/home/sections/hero';
import QuickAccess from '@/pages/home/sections/quick-access';
import DistrictOverview from '@/pages/home/sections/district-overview';
import Footer from '@/layouts/footer';

const TopPlaces = lazy(() => import('@/pages/home/sections/top-places'));
const WhyVisit = lazy(() => import('@/pages/home/sections/why-visit'));
const Culture = lazy(() => import('@/pages/home/sections/culture'));
const History = lazy(() => import('@/pages/home/sections/history'));
const MapSection = lazy(() => import('@/pages/home/sections/map-section'));
const Blocks = lazy(() => import('@/pages/home/sections/blocks'));
const Administration = lazy(() => import('@/pages/home/sections/administration'));
const DistrictDirectory = lazy(() => import('@/pages/home/sections/district-directory'));
const Emergency = lazy(() => import('@/pages/home/sections/emergency'));

const LoadingFallback = () => (
  <div className="h-48 flex flex-col items-center justify-center gap-3 w-full bg-white/40 backdrop-blur-md border border-white/40 rounded-3xl py-12 max-w-xl mx-auto my-12 animate-pulse">
    <div className="w-10 h-10 border-4 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" />
    <span className="text-sm font-bold text-devotional-maroon tracking-wider">Loading Mithila Heritage...</span>
  </div>
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <QuickAccess />
        <DistrictOverview />
        
        <Suspense fallback={<LoadingFallback />}>
          <div className="lazy-section-container">
            <TopPlaces />
            <WhyVisit />
            <Culture />
            <History />
            <MapSection />
            <Blocks />
            <Administration />
            <DistrictDirectory />
            <Emergency />
          </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
