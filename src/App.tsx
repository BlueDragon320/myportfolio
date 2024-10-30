import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';

function App() {
  return (
    <Layout>
      <Hero />
      <div className="mt-8">
        <SocialLinks />
      </div>
    </Layout>
  );
}

export default App;