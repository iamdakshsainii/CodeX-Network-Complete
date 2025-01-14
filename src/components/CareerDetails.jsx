import React from 'react';
    import { useParams, useNavigate } from 'react-router-dom';
    import CareerDetailsContent from './CareerDetailsContent';

    function CareerDetails() {
      const { careerName } = useParams();
      const navigate = useNavigate();

      const handlePrev = () => {
        navigate(-1);
      };

      const handleNext = () => {
        navigate(1);
      };

      return (
        <div className="min-h-screen flex flex-col">
          <div className="container mx-auto px-4 py-8 flex-grow">
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
              >
                Next
              </button>
            </div>
            <CareerDetailsContent careerName={careerName === 'cloud-engineer' ? 'backend-developer' : careerName} />
          </div>
        </div>
      );
    }

    export default CareerDetails;
