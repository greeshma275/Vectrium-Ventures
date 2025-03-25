// pages/page.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div>
      <Navbar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {/* Rest of your page content */}
    </div>
  );
}