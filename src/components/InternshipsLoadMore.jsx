import React from 'react';
import { Link } from 'react-router-dom';

function InternshipsLoadMore({ internships }) {
  return (
    <div className="text-center mt-6">
      <p className="text-gray-400">
        Ready to kickstart your career?{' '}
        <Link
          to="/internships"
          className="text-blue-500 hover:underline"
        >
          Explore More Internship Opportunities
        </Link>
      </p>
    </div>
  );
}

export default InternshipsLoadMore;
