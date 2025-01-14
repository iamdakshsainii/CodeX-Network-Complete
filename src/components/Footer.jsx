import React from 'react';

    function Footer() {
      return (
        <footer className="bg-black/50 backdrop-blur-md border-t border-blue-500/20 py-4 text-center mt-auto">
          <div className="container mx-auto">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} CodeX Network. All Rights Reserved.
            </p>
          </div>
        </footer>
      );
    }

    export default Footer;
