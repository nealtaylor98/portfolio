import { useState } from 'react';
import Navbar from './Utils/Navbar';
import PageContainer from './Utils/PageContainer';
import { HomePage } from './Home/HomePage';
import { AboutPage } from './About/AboutPage';
import { ProjectsPage } from './Projects/ProjectsPage';
import { CustomBackground } from './Utils/MarioBackground/Background';

export const Portfolio = () => {
  const [selectedNavItem, setSelectedNavItem] = useState<string>('Home');

  return (
    <>
      <Navbar
        navItems={[
          {
            label: 'Home',
            onClick: () => setSelectedNavItem('Home'),
          },
          {
            label: 'About',
            onClick: () => setSelectedNavItem('About'),
          },
          {
            label: 'Projects',
            onClick: () => setSelectedNavItem('Projects'),
          },
        ]}
      />
      <CustomBackground>
        <PageContainer>
          {selectedNavItem === 'Home' && <HomePage />}
          {selectedNavItem === 'About' && <AboutPage />}
          {selectedNavItem === 'Projects' && <ProjectsPage />}
        </PageContainer>
      </CustomBackground>
    </>
  );
};
