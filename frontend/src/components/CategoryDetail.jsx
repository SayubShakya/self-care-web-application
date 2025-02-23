import React from "react";
import { useLocation } from "react-router-dom";
import "./CategoryDetail.css";

const CategoryDetail = () => {
  const location = useLocation();
  const { category } = location.state || {}; 

  if (!category) {
    return <div>Category not found.</div>; 
  }

  return (
    <>
    <br /><br /><br /><br />
    <div className="category-detail">
      <h2>{category.title}</h2>
      <img src={category.image} alt={category.title} />
      <p className="description">{category.description}</p>
      <h3>Details</h3>
      <p className="content">{category.content}</p> {/* Displaying the new content */}
      <h3>Why It Matters</h3>
      <p>
        Engaging in this practice can lead to significant improvements in your overall quality of life.
        Whether you're looking to reduce stress, improve your health, or enhance your relationships, 
        understanding the value of {category.title.toLowerCase()} is crucial.
      </p>
      <button className="back-button" onClick={() => window.history.back()}>
        Go Back
      </button>
    </div>
    </>
  );
};

export default CategoryDetail;