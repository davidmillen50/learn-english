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
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
      <div>{JSON.stringify(data)}</div>
    </article>
  )
}

export default Lessons;