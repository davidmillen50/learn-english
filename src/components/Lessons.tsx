import React from 'react';

const data = await fetch(import.meta.env.VITE_API_BASE_URL + '/lessons', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  }
})
  .then(response => response.json())
  .catch(error => {
    console.error('Error fetching lessons:', error);
    return [];
  });

const Lessons: React.FC = () => {
  return (
    <div>
    <nav className="top-navbar" />
      <div className="bauhaus-art-sidebar">
        <div className="shape black-circle"></div>
        <div className="shape yellow-rect"></div>
        <div className="shape blue-line"></div>
        <div className="shape orange-circle"></div>
        <div className="shape yellow-circle"></div>
        <div className="shape black-line"></div>
        <div className="shape black-rect"></div>
        <div className="shape md-black-square"></div>
        <div className="shape lower-black-line"></div>
        <div className="shape horizontal-black-line"></div>
        <div className="shape red-rect"></div>
      </div>
    </div>
  )
}

export default Lessons;