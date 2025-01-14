import React, { useState } from 'react';
    import RequestNotesSection from './RequestNotesSection';

    function StudyMaterialsSection({ className }) {
      const studyMaterials = [
        {
          year: 1,
          semesters: [
            { sem: 1, link: '/resources/y1s1.pdf', subjects: ['Maths', 'Physics', 'Computer Science', 'Engineering Drawing', 'Mechanics'] },
            { sem: 2, link: '/resources/y1s2.pdf', subjects: ['Chemistry', 'Biology', 'Electrical', 'Environmental Science', 'Engineering Mechanics'] }
          ]
        },
        {
          year: 2,
          semesters: [
            { sem: 1, link: '/resources/y2s1.pdf', subjects: ['Data Structures', 'Algorithm', 'Electronics', 'Digital Logic', 'Signals and Systems'] },
            { sem: 2, link: '/resources/y2s2.pdf', subjects: ['Database', 'Operating Systems', 'Networking', 'Software Engineering', 'Mathematics II'] }
          ]
        },
        {
          year: 3,
          semesters: [
            { sem: 1, link: '/resources/y3s1.pdf', subjects: ['Web Development', 'AI', 'Software Engineering', 'Computer Networks', 'Database Systems'] },
            { sem: 2, link: '/resources/y3s2.pdf', subjects: ['Machine Learning', 'Cloud Computing', 'Security', 'Cryptography', 'Mobile Computing'] }
          ]
        },
        {
          year: 4,
          semesters: [
            { sem: 1, link: '/resources/y4s1.pdf', subjects: ['Advanced Algorithms', 'Big Data', 'DevOps', 'Blockchain', 'Artificial Intelligence'] },
            { sem: 2, link: '/resources/y4s2.pdf', subjects: ['Blockchain', 'IoT', 'Cybersecurity', 'Cloud Security', 'Network Security'] }
          ]
        }
      ];

      const [popup, setPopup] = useState({ isOpen: false, subjects: [], link: '' });
      const [searchQuery, setSearchQuery] = useState('');

      const handleSemesterClick = (subjects, link) => {
        setPopup({ isOpen: true, subjects, link });
        setSearchQuery('');
      };

      const handlePopupClose = () => {
        setPopup({ isOpen: false, subjects: [], link: '' });
        setSearchQuery('');
      };

      const handleSubjectClick = (link) => {
        window.open(link, '_blank');
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const filteredSubjects = popup.subjects.filter(subject =>
        subject.toLowerCase().includes(searchQuery.toLowerCase())
      );

      return (
        <section id="study-materials" className={`container mx-auto px-4 mb-16 ${className} transition-opacity duration-500`}>
          <h2 className="text-4xl font-bold text-center mb-12">Study Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {studyMaterials.map((yearData) => (
              <div key={yearData.year} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-center p-4 border-b border-blue-500/20">Year {yearData.year}</h3>
                <div className="p-4 space-y-4">
                  {yearData.semesters.map((semester) => (
                    <div key={semester.sem} className="bg-gray-700/50 backdrop-blur-sm rounded-lg border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300">
                      <h4 className="text-xl font-semibold p-2 text-center border-b border-blue-500/10">Semester {semester.sem}</h4>
                      <div className="text-center p-2">
                        <button
                          onClick={() => handleSemesterClick(semester.subjects, semester.link)}
                          className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                          View Subjects
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <RequestNotesSection />
          </div>
          {popup.isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <h3 className="text-2xl font-semibold text-center mb-4">Subjects</h3>
                 <input
                    type="text"
                    placeholder="Search subjects..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white mb-4"
                  />
                <ul className="space-y-2">
                  {filteredSubjects.map((subject) => (
                    <li key={subject} className="text-gray-300 text-left">
                      <a href={popup.link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        {subject}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <button
                    onClick={handlePopupClose}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      );
    }

    export default StudyMaterialsSection;
