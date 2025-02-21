import React from 'react';
import './HomeCategory.css'; // Link to the CSS file (see below)

const HomeCategory = () => {
  const categories = [
    {
      title: 'Mindfulness & Meditation',
      description:
        'Find peace and clarity through guided meditations and mindfulness exercises. Cultivate a calm and focused mind.',
      image: 'https://via.placeholder.com/300x200/77dd77/fff?text=Meditation', // REPLACE ME
    },
    {
      title: 'Healthy Eating',
      description:
        'Nourish your body with delicious and wholesome recipes. Fuel yourself with the energy you need to thrive.',
      image: 'https://via.placeholder.com/300x200/ff6961/fff?text=Healthy+Food', // REPLACE ME
    },
    {
      title: 'Physical Activity',
      description:
        'Move your body and boost your mood. Discover fun and engaging ways to stay active and energized.',
      image: 'https://via.placeholder.com/300x200/4682b4/fff?text=Exercise', // REPLACE ME
    },
    {
      title: 'Rest & Relaxation',
      description:
        'Prioritize rest and rejuvenation. Learn techniques to unwind, de-stress, and sleep soundly.',
      image: 'https://via.placeholder.com/300x200/dda0dd/fff?text=Relaxation', // REPLACE ME
    },
  ];

  return (
    <div className="home-categories">
      <h2>Explore Self-Care Practices</h2>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button>Discover More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;