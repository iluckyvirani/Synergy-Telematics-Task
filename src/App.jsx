import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/utils';

const HomePage = lazy(() => import('./pages/HomePage'));


const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-[linear-gradient(90deg,rgba(194,54,101,1)-110%,rgba(27,30,111,1)_30%)]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
      <p className="mt-4 text-primary font-inter">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />


        </Routes>
      </Suspense>
    </Router>
  );
}
