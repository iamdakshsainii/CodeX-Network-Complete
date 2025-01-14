import React from 'react';
    import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

    function LinkTree() {
      const links = [
        {
          title: 'GitHub',
          url: 'https://github.com/iamdakshsainii',
          icon: <Github className="h-6 w-6" />,
        },
        {
          title: 'LinkedIn',
          url: 'https://www.linkedin.com/posts/codex-network_techcommunity-hackathons-productbasedcompanies-activity-7260243664914767873-hhL4?utm_source=share&utm_medium=member_desktop',
          icon: <Linkedin className="h-6 w-6" />,
        },
        {
          title: 'Twitter',
          url: 'https://twitter.com/codexnetwork8',
          icon: <Twitter className="h-6 w-6" />,
        },
        {
          title: 'Email',
          url: 'mailto:codexnetwork8@gmail.com', // Updated to mailto link
          icon: <Mail className="h-6 w-6" />,
        },
      ];

      return (
        <div className="max-w-md mx-auto space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Let's Connect!</h1>
            <p className="text-gray-400">
              Explore our network and stay updated with the latest from CodeX.
            </p>
          </div>
          <div className="space-y-4">
            {links.map((link) => (
              <a
                key={link.title}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)]"
              >
                {link.icon}
                <span className="text-lg">{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      );
    }

    export default LinkTree;
