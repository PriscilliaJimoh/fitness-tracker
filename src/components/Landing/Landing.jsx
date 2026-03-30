import '../../global.css';
import './Landing.css';

import React from 'react';
import { useNavigate } from 'react-router';

const Landing = () => {
  const pages = [
    { name: 'profile', label: 'Profile', bg: '#141414' },
    { name: 'dashboard', label: 'Dashboard', bg: '#171717' },
    { name: 'workout', label: 'Workout', bg: '#1a1a1a' },
    { name: 'classes', label: 'Classes', bg: '#1d1d1d' },
    { name: 'nutrition', label: 'Nutrition', bg: '#202020' },
    { name: 'membership', label: 'Membership', bg: '#232323' },
  ];

  const navigate = useNavigate();
  return (
    <div className="landing-container">
      <div className="pages">
        {pages.map((page) => (
          <div
            className={`page-item ${page.name}`}
            style={{ background: page.bg }}
            key={page.name}
            onClick={() => {
              navigate(`/${page.name}`);
            }}
          >
            <h1>{page.label}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing;
