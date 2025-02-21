import React from 'react';
import './HomeCategory.css'; // Link to the CSS file

const HomeCategory = () => {
  const categories = [
    {
      title: 'Mindfulness & Meditation',
      description: 'Find calm and focus with guided meditations and mindfulness exercises.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcH0_TVzDs8hCswIYDncFL3ZsbBO3g8v0GCw&s', // REPLACE ME
    },
    {
      title: 'Healthy Eating',
      description: 'Explore delicious, wholesome recipes to nourish your body.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0m-_QXV2pb8jWVLX1diyfKi5csq51RQGmQ&s', // REPLACE ME
    },
    {
      title: 'Physical Activity',
      description: 'Stay active and energized with fun, engaging workouts.',
      image: 'https://www.volunteerworldnepal.org/wp-content/uploads/2021/12/sports-and-physical-education.jpg', // REPLACE ME
    },
    {
      title: 'Rest & Relaxation',
      description: 'Unwind and recharge with techniques for better sleep and relaxation.',
      image: 'https://ivhq.imgix.net/images/addons/international-volunteer-hq-tour-travel-add-on-nepal-hatha-yoga-meditation-retreat.jpg?w=770&h=330&fit=crop&auto=format,compress', // REPLACE ME
    },
    {
      title: 'Social Connections',
      description: 'Strengthen relationships and build meaningful connections with others.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWimyjYM4eAPAQFdfMxsbNbgtl05BxE--vHQ&s', // REPLACE ME
    },
    {
      title: 'Creative Expression',
      description: 'Unleash your creativity through art, writing, music, or other hobbies.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJxzNbWAOMux9f6HMfPi4T-fncJV5zY39Qw&s', // REPLACE ME
    },
  ];

  return (
    <div className="home-categories">
      <h2>Explore Self-Care Practices</h2>
      <p className="tagline">Take small steps every day to nurture your mind, body, and soul.</p>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button>Start Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;