import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomeCategory.css";

const HomeCategory = () => {
  const navigate = useNavigate();

  const categories = [
    {
      title: "Mindfulness & Meditation",
      description: "Find calm and focus with guided meditations and mindfulness exercises.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcH0_TVzDs8hCswIYDncFL3ZsbBO3g8v0GCw&s",
      content: "Mindfulness and meditation practices can help reduce stress and improve focus. Try incorporating short meditation sessions into your daily routine.",
    },
    {
      title: "Healthy Eating",
      description: "Explore delicious, wholesome recipes to nourish your body.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR0m-_QXV2pb8jWVLX1diyfKi5csq51RQGmQ&s",
      content: "Healthy eating is essential for maintaining good health. Focus on whole foods like fruits, vegetables, whole grains, and lean proteins.",
    },
    {
      title: "Physical Activity",
      description: "Stay active and energized with fun, engaging workouts.",
      image: "https://www.volunteerworldnepal.org/wp-content/uploads/2021/12/sports-and-physical-education.jpg",
      content: "Regular physical activity can improve your mood and energy levels. Aim for at least 30 minutes of moderate exercise most days of the week.",
    },
    {
      title: "Rest & Relaxation",
      description: "Unwind and recharge with techniques for better sleep and relaxation.",
      image: "https://ivhq.imgix.net/images/addons/international-volunteer-hq-tour-travel-add-on-nepal-hatha-yoga-meditation-retreat.jpg?w=770&h=330&fit=crop&auto=format,compress",
      content: "Prioritize rest and relaxation to enhance your overall well-being. Create a calming bedtime routine to improve your sleep quality.",
    },
    {
      title: "Social Connections",
      description: "Strengthen relationships and build meaningful connections with others.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWimyjYM4eAPAQFdfMxsbNbgtl05BxE--vHQ&s",
      content: "Cultivating social connections can boost your mental health. Make time for friends and family, and seek out community activities.",
    },
    {
      title: "Creative Expression",
      description: "Unleash your creativity through art, writing, music, or other hobbies.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxJxzNbWAOMux9f6HMfPi4T-fncJV5zY39Qw&s",
      content: "Engaging in creative activities can reduce stress and improve your mood. Explore different forms of art, writing, or music to find what inspires you.",
    },
  ];

  const handleReadMore = (category) => {
    navigate("/CategoryDetail", { state: { category } }); // Pass the category object to CategoryDetail
  };

  return (
    <div className="home-categories">
      <h2>Explore Self-Care Practices</h2>
      <p className="tagline">
        Take small steps every day to nurture your mind, body, and soul.
      </p>
      <div className="category-grid">
        {categories.map((category, index) => (
          <div className="category-item" key={index}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
            <button
              onClick={() => handleReadMore(category)}
              style={{
                backgroundColor: "#4CAF50",
                color: "white", // White text
                padding: "10px 15px", // Padding
                border: "none", // No border
                borderRadius: "5px", // Rounded corners
                cursor: "pointer", // Pointer cursor
                fontSize: "1rem", // Font size
              }}
            >
              Read More..
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCategory;