import React, { useState, useEffect } from 'react';

    function CodeSnippetLibrary() {
      const [snippets, setSnippets] = useState(() => {
        const storedSnippets = localStorage.getItem('codeSnippets');
        return storedSnippets ? JSON.parse(storedSnippets) : [];
      });
      const [newSnippet, setNewSnippet] = useState({ title: '', code: '', tags: '', project: '' });
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedTags, setSelectedTags] = useState([]);
      const [selectedProject, setSelectedProject] = useState('');

      useEffect(() => {
        localStorage.setItem('codeSnippets', JSON.stringify(snippets));
      }, [snippets]);

      const handleAddSnippet = (e) => {
        e.preventDefault();
        const newId = Date.now().toString();
        setSnippets([...snippets, { ...newSnippet, id: newId }]);
        setNewSnippet({ title: '', code: '', tags: '', project: '' });
      };

      const handleRemoveSnippet = (id) => {
        setSnippets(snippets.filter(snippet => snippet.id !== id));
      };

      const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
      };

      const handleTagClick = (tag) => {
        setSelectedTags(prevTags =>
          prevTags.includes(tag) ? prevTags.filter(t => t !== tag) : [...prevTags, tag]
        );
      };

      const handleProjectChange = (e) => {
        setSelectedProject(e.target.value);
      };

      const filteredSnippets = snippets.filter(snippet => {
        const searchMatch =
          !searchQuery ||
          snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          snippet.code.toLowerCase().includes(searchQuery.toLowerCase());
        const tagMatch =
          selectedTags.length === 0 ||
          selectedTags.every(tag => snippet.tags.toLowerCase().includes(tag.toLowerCase()));
        const projectMatch =
          !selectedProject || snippet.project === selectedProject;
        return searchMatch && tagMatch && projectMatch;
      });

      const allTags = [...new Set(snippets.flatMap(snippet => snippet.tags.split(',').map(tag => tag.trim())))];
      const allProjects = [...new Set(snippets.map(snippet => snippet.project))];

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Code Snippet Library</h1>
          <p className="text-gray-400 text-center mb-8">
            Save and share useful code snippets to help you and others in your learning journey.
          </p>
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6">
            <form onSubmit={handleAddSnippet} className="mb-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Title"
                  value={newSnippet.title}
                  onChange={(e) => setNewSnippet({ ...newSnippet, title: e.target.value })}
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Code"
                  value={newSnippet.code}
                  onChange={(e) => setNewSnippet({ ...newSnippet, code: e.target.value })}
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                  rows="4"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Tags (comma-separated)"
                  value={newSnippet.tags}
                  onChange={(e) => setNewSnippet({ ...newSnippet, tags: e.target.value })}
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                />
              </div>
              <div>
                <select
                  value={newSnippet.project}
                  onChange={(e) => setNewSnippet({ ...newSnippet, project: e.target.value })}
                  className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                  required
                >
                  <option value="">Select Project</option>
                  {allProjects.map(project => (
                    <option key={project} value={project}>{project}</option>
                  ))}
                </select>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Add Snippet
                </button>
              </div>
            </form>
            <div className="flex space-x-4 mb-4">
              <input
                type="text"
                placeholder="Search snippets..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
              />
              <select
                value={selectedProject}
                onChange={handleProjectChange}
                className="p-2 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
              >
                <option value="">All Projects</option>
                {allProjects.map(project => (
                  <option key={project} value={project}>{project}</option>
                ))}
              </select>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => handleTagClick(tag)}
                    className={`px-2 py-1 rounded text-sm ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-300'}`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <ul className="space-y-4">
              {filteredSnippets.map((snippet) => (
                <li key={snippet.id} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{snippet.title}</h3>
                    <p className="text-gray-400 text-sm">Project: {snippet.project}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveSnippet(snippet.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-all text-xs"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }

    export default CodeSnippetLibrary;
