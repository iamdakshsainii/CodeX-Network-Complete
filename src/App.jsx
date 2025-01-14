import React from 'react';
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import Navbar from './components/Navbar';
    import Home from './pages/home/Home';
    import Projects from './pages/projects/Projects';
    import Events from './pages/events/Events';
    import Careers from './pages/careers/Careers';
    import Internships from './components/Internships';
    import Footer from './components/Footer';
    import Team from './components/Team';
    import AboutPage from './components/AboutPage';
    import CareerDetails from './components/CareerDetails';
    import ProjectDetails from './components/ProjectDetails';
    import CareerPathsAll from './components/CareerPathsAll';
    import Khazana from './pages/Khazana';
    import Login from './pages/login/Login';

    function App() {
      return (
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex flex-col">
            <Navbar />
            <div className="container mx-auto px-4 py-8 flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<Projects />} />
                 <Route path="/projects/:projectTitle" element={<ProjectDetails />} />
                <Route path="/events" element={<Events />} />
                <Route path="/careers" element={<Careers />} />
                 <Route path="/careers/all" element={<CareerPathsAll />} />
                <Route path="/internships" element={<Internships />} />
                 <Route path="/team" element={<Team />} />
                 <Route path="/careers/:careerName" element={<CareerDetails />} />
                 <Route path="/khazana" element={<Khazana />} />
                 <Route path="/login" element={<Login />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      );
    }

    export default App;
