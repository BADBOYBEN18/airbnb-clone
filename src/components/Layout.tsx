import React from 'react';
import { Nav } from './Navbar/Nav';
import { Footer } from './Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
