import React from 'react';
    import HeaderSection from '../../components/sections/HeaderSection';
    import AboutUsSection from '../../components/sections/AboutUsSection';
    import StudyMaterialsSection from '../../components/sections/StudyMaterialsSection';
    import CareerPathsSection from '../../components/sections/CareerPathsSection';
    import InternshipsSection from '../../components/sections/InternshipsSection';

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
