import React from 'react';
    import TeamMembersSection from './sections/TeamMembersSection';

    function Team() {
      return (
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 py-8 flex-grow">
            <TeamMembersSection />
          </div>
        </div>
      );
    }

    export default Team;
