import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Pipeline from './components/Pipeline';
import HowItWorks from './components/HowItWorks';
import Hardware from './components/Hardware';
import AiIntelligence from './components/AiIntelligence';
import CaseStudy from './components/CaseStudy';
import RiskDemo from './components/RiskDemo';
import Technology from './components/Technology';
import Impact from './components/Impact';
import FutureExpansion from './components/FutureExpansion';
import Team from './components/Team';
import Mentors from './components/Mentors';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Pipeline />
        <HowItWorks />
        <Hardware />
        <AiIntelligence />
        <CaseStudy />
        <RiskDemo />
        <Technology />
        <Impact />
        <FutureExpansion />
        <Team />
        <Mentors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
