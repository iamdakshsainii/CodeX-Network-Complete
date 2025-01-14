import React from 'react';
    import Footer from './Footer';
    import Navbar from './Navbar';
    import AboutUsSection from './sections/AboutUsSection';

    function AboutPage() {
      return (
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 py-8 flex-grow">
            <AboutUsSection />
          </div>
        </div>
      );
    }

    export default AboutPage;
