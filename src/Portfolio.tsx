import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { AboutPage } from './About/AboutPage';
import { HomePage } from './Home/HomePage';
import { ProjectsPage } from './Projects/ProjectsPage';
import { CustomBackground } from './Utils/MarioBackground/Background';
import Navbar from './Utils/Navbar';
import PageContainer from './Utils/PageContainer';

export const Portfolio = () => {
  return (
    <Router>
      <HeaderNav />
      <CustomBackground>
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Projects" element={<ProjectsPage />} />
          </Routes>
        </PageContainer>
      </CustomBackground>
    </Router>
  );
};

const HeaderNav = () => {
  const navigate = useNavigate();
  return (
    <Navbar
      navItems={[
        {
          label: 'Home',
          onClick: () => navigate('Home'),
        },
        {
          label: 'About',
          onClick: () => navigate('About'),
        },
        {
          label: 'Projects',
          onClick: () => navigate('Projects'),
        },
      ]}
    />
  );
};
