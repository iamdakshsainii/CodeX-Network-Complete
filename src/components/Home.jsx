import React from 'react';
    import HeaderSection from './sections/HeaderSection';
    import AboutUsSection from './sections/AboutUsSection';
    import StudyMaterialsSection from './sections/StudyMaterialsSection';
    import CareerPathsSection from './sections/CareerPathsSection';
    import InternshipsSection from './sections/InternshipsSection';

    function Home() {
      return (
        <div className="min-h-screen flex flex-col max-w-7xl mx-auto">
          <HeaderSection className="mb-24"/>
          <AboutUsSection className="bg-gray-900/20 mb-24" />
          <StudyMaterialsSection className="bg-gray-900/10 mb-24" />
          <InternshipsSection className="bg-gray-900/10 mb-24" />
          <CareerPathsSection className="bg-gray-900/20 mb-24" />
        </div>
      );
    }

    export default Home;
