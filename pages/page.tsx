// pages/page.tsx
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [setActiveSection] = useState('home');

  return (
    <div>
      <Navbar 
        setActiveSection={setActiveSection}
      />
      {/* Rest of your page content */}
    </div>
  );
}