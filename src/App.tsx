/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import React, { useState } from 'react';
import ArtBranding from './pages/ArtBranding';
import ConversionPerformance from './pages/ConversionPerformance';
import SalesCreator from './pages/SalesCreator';
import PersonalBranding from './pages/PersonalBranding';
import GlobalAudioPlayer from './components/GlobalAudioPlayer';
import LoadingScreen from './components/loading';
import CustomCursor from './components/CustomCursor'
export default function App() {
    const [isLoading, setIsLoading] = useState(true);
  return (
    <Router>
           {isLoading && <LoadingScreen onFinished={() => setIsLoading(false)} />}
            
      <div className="bg-[#0a0f1c] min-h-screen relative">
         <CustomCursor />
        <GlobalAudioPlayer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/art-branding" element={<ArtBranding />} />
          <Route path="/conversion-performance" element={<ConversionPerformance />} />
          <Route path="/sales-creator" element={<SalesCreator />} />
          <Route path="/personal-branding" element={<PersonalBranding />} />
        </Routes>
      </div>
    </Router>
  );
}
